import * as Apollo from "@apollo/client";
import { GET_LOCATION } from "./queries";

export function useGetLocationLazyQuery() {
  return Apollo.useLazyQuery<any>(GET_LOCATION);
}
// export function useDataListMutation(baseOptions?: any) {
//   return Apollo.useMutation<any>(DataListUpdate, { ...baseOptions });
// }
