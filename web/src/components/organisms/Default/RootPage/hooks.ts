import { useCallback } from "react";
import {
  useCreateUserMutation,
  useGetUserLazyQuery,
} from "src/gql/graphql-api";

const TestHook = () => {
  const [searchUser, { data: datas }] = useGetUserLazyQuery();

  const handlFind = useCallback(
    async (props: { name: string }) => {
      return await searchUser({ variables: props });
    },
    [searchUser]
  );
  const [createMutation] = useCreateUserMutation();

  const createUser = useCallback(
    async (props: { createUserName2: string; email: string }) => {
      return await createMutation({
        variables: props,
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
