import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($name: String, $email: String) {
    createUser(name: $name, email: $email) {
      id
    }
  }
`;
