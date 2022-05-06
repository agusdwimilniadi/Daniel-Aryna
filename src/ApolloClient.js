import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://helped-warthog-70.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "HqdJen83H787isEbWhXT84gHpPzguluMXnf1kyPmPyPljWg6Tx8CbDzCV5vXiS6J",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://helped-warthog-70.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "HqdJen83H787isEbWhXT84gHpPzguluMXnf1kyPmPyPljWg6Tx8CbDzCV5vXiS6J",
      },
    },
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
