(ns keechma-ssr.client.app
  (:require-macros
   [reagent.ratom :refer [reaction]])
  (:require
   [reagent.core :as reagent]
   [keechma.ui-component :as ui]
   [keechma.controller :as controller]
   [keechma.app-state :as app-state]))


(defrecord Counter []
  controller/IController

  (params [_ _] true)

  (start [_ params app-db]
    (-> app-db
        (assoc-in [:kv :message] "Hello From the Server Side!")
        (assoc-in [:count] 1)))

  (handler [_ app-db-atom in-chan _]
    (controller/dispatcher
     app-db-atom
     in-chan
     {:dec #(swap! app-db-atom update-in [:count] dec)
      :inc #(swap! app-db-atom update-in [:count] inc)})))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Subs

(defn counter-value-sub [app-db]
  (reaction
   (get-in @app-db [:count])))

(defn message-sub [app-db]
  (reaction
   (get-in @app-db [:kv :message])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Components

(defn counter-render [app-db]
  (let [counter-sub (ui/subscription app-db :counter-value)]
    (fn []
      [:div
       [:h1 @(ui/subscription app-db :message)]
       [:button {:on-click #(ui/send-command app-db :dec)} "Decrement"]
       [:button {:on-click #(ui/send-command app-db :inc)} "Increment"]
       [:p (str "Count: " @counter-sub)]])))

(def counter-component
  (ui/constructor
   {:renderer          counter-render
    :subscription-deps [:counter-value :message]}))

(def definition
  {:components    {:main (assoc counter-component :topic :Counter)}
   :controllers   {:Counter (->Counter)}
   :subscriptions {:counter-value counter-value-sub
                   :message message-sub}
   :router        :history})
