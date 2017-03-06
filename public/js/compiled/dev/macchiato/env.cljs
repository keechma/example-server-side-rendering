(ns macchiato.env
  (:require [clojure.string :as s]
            [cljs.reader :as edn]
            [macchiato.fs :as fs]))

(defn- k->path [k dash level]
  (as-> k $
        (s/lower-case $)
        (s/split $ level)
        (map (comp keyword
                   #(s/replace % dash "-"))
             $)))

(defn- parse-boolean [s]
  (boolean (some-> s (.trim) (.toLowerCase) (= "true"))))

(defn str->value [v]
  "ENV vars and system properties are strings. str->value will convert:
  the numbers to longs, the alphanumeric values to strings, and will use Clojure reader for the rest
  in case reader can't read OR it reads a symbol, the value will be returned as is (a string)"
  (cond
    (re-matches #"[0-9]+" v) (js/parseFloat v)
    (re-matches #"(?i)^(true|false)$" v) (parse-boolean v)
    (re-matches #"\w+" v) v
    :else
    (try
      (let [parsed (edn/read-string v)]
        (if (symbol? parsed)
          v
          parsed))
      (catch js/Error _
        v))))

(defn env->path [k]
  (k->path k "_" #"__"))

(defn env-props []
  (let [env (.-env js/process)]
    (reduce
      (fn [props k]
        (assoc-in props (env->path k) (str->value (aget env k))))
      {}
      (js/Object.keys env))))

(defn file-props [filename]
  (some-> filename
          (fs/slurp)
          (edn/read-string)))

(defn- deep-merge [a b]
  (merge-with (fn [x y]
                (cond (map? y) (deep-merge x y)
                      (vector? y) (concat x y)
                      :else y))
              a b))

(defn env [& [filename]]
  (let [env-config (env-props)]
    (deep-merge
      env-config
      (file-props (or (:conf env-config) filename "config.edn")))))
