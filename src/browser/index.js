import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "components/App";
import SearchContainer from "components/SearchContainer";
import ModelDetails from "components/ModelDetails";

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/make/model/:modelId" component={ModelDetails} />
      </div>
    </Router>
  </ApolloProvider>,
  window.document.getElementById("app")
);
