import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_URL,
  headers: {
    authorization: `${import.meta.env.VITE_AUTH_TOKEN}`,
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
