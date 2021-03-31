import { ApolloProvider } from "@apollo/client";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { client, isDarkVar } from "./apollo";
import { GlobalStyle } from "./GlobalStyle";
import AppRouter from "./Router";
import { darkMode, lightMode } from "./style";

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={isDarkVar() ? darkMode : lightMode}>
          <GlobalStyle />
          <AppRouter />
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
