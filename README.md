## Welcome to keechma-ssr

## Example server side rendering with Keechma and Macchiatio

This example is using the [Macchiatio](https://github.com/macchiato-framework) framework to render the [Keechma](https://github.com/keechma/) app on the server side.

### Prequisites

[Node.js](https://nodejs.org/en/) needs to be installed to run the application.

### running in development mode

run the following command in the terminal to install NPM modules and start Figwheel:

```
lein build
```

run `node` in another terminal:

```
node target/out/keechma-ssr.js
```

in the third terminal run:

```
lein with-profile +client figwheel dev-client
```

#### configuring the REPL

Once Figwheel and node are running, you can connect to the remote REPL at `localhost:7000`.

Type `(cljs)` in the REPL to connect to Figwheel ClojureScript REPL.


### building the release version

```
lein package
```

Run the release version:

```
node target/release/keechma-ssr.js
```
