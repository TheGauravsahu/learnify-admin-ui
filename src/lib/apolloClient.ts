import { useAuthStore } from "@/stores/auth.store";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const useApolloClient = () => {
  const { token } = useAuthStore();

  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_BACKEND_GRAPHQL_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            ListTeachers: {
              keyArgs: ["page", "limit", "sortBy", "sortOrder", "search"],
            },
          },
        },
      },
    }),
  });
};
