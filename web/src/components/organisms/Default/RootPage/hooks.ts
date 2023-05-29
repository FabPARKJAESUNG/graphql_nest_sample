import { useCallback, useEffect } from "react";
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

  // const [createMutation] = useCreateUserMutation();

  // const createUser = useCallback(
  //   async (data: { name: string; email: string }) => {
  //     return await createMutation({ variables: data });
  //   },
  //   [createMutation]
  // );

  return {
    datas,
    handlFind,
    // createUser,
  };
};

export default TestHook;
