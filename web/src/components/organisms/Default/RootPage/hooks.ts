import { useCallback } from "react";
import {
  useCreateUserMutation,
  useGetUserLazyQuery,
} from "src/gql/graphql-api";

const TestHook = () => {
  const [searchUser, { data: datas }] = useGetUserLazyQuery();

  const handlFind = useCallback(
    (name: string) => {
      return searchUser({ variables: { name } });
    },
    [searchUser]
  );

  const [createMutation] = useCreateUserMutation();

  const createUser = useCallback(
    async (data: { name: string; email: string }) => {
      console.log(data);
      const ddd = await createMutation({
        variables: data,
      });
      console.log(data);
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
