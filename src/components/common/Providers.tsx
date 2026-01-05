import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { useApolloClient } from "@/lib/apolloClient";
import { LoadingBarContainer } from "react-top-loading-bar";

export default function Providers({ children }: { children: React.ReactNode }) {
  const apolloClient = useApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="learnify-ui-theme">
          <LoadingBarContainer props={{ color: "#8800FF", height: 2 }}>
            {children}
          </LoadingBarContainer>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}
