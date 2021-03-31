import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isDarkVar = makeVar(false);
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem("token")));

export const logUserOut = () => {
  localStorage.removeItem("token");
  isLoggedInVar(false);
};

export const logUserIn = (token) => {
  localStorage.setItem("token", token);
  isLoggedInVar(true);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
