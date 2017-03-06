(ns keechma-ssr.routes
  (:require
    [bidi.bidi :as bidi]
    [hiccups.runtime]
    [macchiato.util.response :as r]
    [keechma.ssr :as ssr]
    [keechma-ssr.client.app :refer [definition]])
  (:require-macros
    [hiccups.core :refer [html]]))



(defn router [req res raise]
  (ssr/render definition ""
              (fn [app]
                (-> (html
                     [:html
                      [:body
                       [:div {:id "app"}
                        (:html app)]
                       [:script (str "window.STATE = " (.stringify js/JSON (:app-state app)))]
                       [:script {:src "/js/compiled/app.js"}]
                       [:script "keechma_ssr.client.core.main();"]]])
                    (r/ok)
                    (r/content-type "text/html")
                    (res)))))

(defn not-found [req res raise]
  (-> (html
        [:html
         [:body
          [:h2 (:uri req) " was not found"]]])
      (r/not-found)
      (r/content-type "text/html")
      (res)))

#_(def routes
  ["/" {:get home}])

#_(defn router [req res raise]
  (if-let [{:keys [handler route-params]} (bidi/match-route* routes (:uri req) req)]
    (handler (assoc req :route-params route-params) res raise)
    (not-found req res raise)))
