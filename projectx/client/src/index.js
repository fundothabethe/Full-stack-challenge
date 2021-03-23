import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import Apolloclient from "apollo-client";
import { ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

//caching data and fetching on server side
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/graphql",
});
const client = new Apolloclient({
  cache,
  link,
});

//react-redux store passing root reducer and dev tools to help vitualize
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
