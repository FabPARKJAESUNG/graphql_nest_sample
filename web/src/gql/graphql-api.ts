import * as Apollo from "@apollo/client";
import { GET_USER } from "./queries";
import { CREATE_USER } from "./mutations";

export function useGetUserLazyQuery(props?: { variables: { name: string } }) {
  const options = { ...props };
  return Apollo.useLazyQuery(GET_USER, options);
}
export function useCreateUserMutation(props?: {
  variables: { createUserName2: string; email: string };
}) {
  const options = { ...props };
  return Apollo.useMutation<any>(CREATE_USER, options);
}
