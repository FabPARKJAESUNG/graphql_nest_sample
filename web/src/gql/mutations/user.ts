import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserName2: String!, $email: String!) {
    createUser(name: $createUserName2, email: $email) {
      id
    }
  }
`;
