(ns keechma-ssr.app
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [keechma-ssr.core-test]))

(doo-tests 'keechma-ssr.core-test)


