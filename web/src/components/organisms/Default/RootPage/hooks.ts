import { useCallback } from "react";
import {
  useCreateUserMutation,
  useGetUserLazyQuery,
} from "src/gql/graphql-api";

const TestHook = () => {
  const [searchUser, { data: datas }] = useGetUserLazyQuery();

  const handlFind = useCallback(
    (props: { name: string }) => {
      return searchUser();
    },
    [searchUser]
  );
  const [createMutation] = useCreateUserMutation();

  const createUser = useCallback(
    async (props: { name: string; email: string }) => {
      await createMutation({
        variables: { name: props.name, email: props.email },
      });
    },
    [createMutation]
  );

  return {
    datas,
    handlFind,
    createUser,
  };
};

export default TestHook;
