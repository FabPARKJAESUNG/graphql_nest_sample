import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($newName: String!, $email: String!) {
    createUser(name: $newName, email: $email) {
      id
    }
  }
`;
