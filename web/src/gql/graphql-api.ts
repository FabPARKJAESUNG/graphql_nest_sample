import * as Apollo from "@apollo/client";
import { GET_USER } from "./queries";

export function useGetUserLazyQuery() {
  return Apollo.useLazyQuery<any>(GET_USER);
}
// export function useDataListMutation(baseOptions?: any) {
//   return Apollo.useMutation<any>(DataListUpdate, { ...baseOptions });
// }
