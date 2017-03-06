(ns figwheel.connect.dev-client (:require [figwheel.client] [figwheel.client.utils] [keechma-ssr.client.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/keechma-ssr.client.core.reload (apply js/keechma-ssr.client.core.reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'keechma-ssr.client.core/reload' is missing"))), :build-id "dev-client", :websocket-url "ws://localhost:3450/figwheel-ws"})

