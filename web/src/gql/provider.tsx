import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { ReactNode } from "react";

const Provider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3010",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
