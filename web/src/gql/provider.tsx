import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { ReactNode } from "react";

const Provider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
