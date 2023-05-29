import * as Apollo from "@apollo/client";
import { GET_USER } from "./queries";
import { CREATE_USER } from "./mutations";

export function useGetUserLazyQuery(props?: { variables: { name: string } }) {
  return Apollo.useLazyQuery(GET_USER, { variables: props?.variables });
}
export function useCreateUserMutation(props?: {
  variables: { name: string; email: string };
}) {
  console.log(props);
  return Apollo.useMutation<any>(CREATE_USER, { variables: props?.variables });
}
