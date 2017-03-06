(ns keechma-ssr.client.core
  (:require-macros
   [reagent.ratom :refer [reaction]])
  (:require
   [reagent.core :as reagent]
   [keechma.ui-component :as ui]
   [keechma.controller :as controller]
   [keechma.app-state :as app-state]
   [keechma-ssr.client.app :as app]))
   
(defonce debug?
  ^boolean js/goog.DEBUG)


(def app-definition
  (assoc app/definition
         :html-element (.getElementById js/document "app")))

(defonce running-app (clojure.core/atom))

(defn start-app! []
  (reset! running-app (app-state/start! (assoc app-definition :initial-data (app-state/deserialize-app-state {} (.-STATE js/window))))))

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))
    

(defn reload []
  (let [current @running-app]
    (if current
      (app-state/stop! current start-app!)
      (start-app!))))

(defn ^:export main []
  (dev-setup)
  (start-app!))
