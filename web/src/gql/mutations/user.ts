import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  query CreateUser($name: String, $email: String) {
    createUser(name: $name) {
      name
      email
    }
  }
`;
