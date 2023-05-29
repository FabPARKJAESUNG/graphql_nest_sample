import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import type { ReactNode } from "react";

const Provider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
  client
    .query({
      query: gql`
        query GetUsers {
          users {
            id
            name
            email
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
