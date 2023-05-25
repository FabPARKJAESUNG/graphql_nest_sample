import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

export const DataListGet = gql`
  query dataList {
    table1 {
      col1
    }
  }
`;

export const DataListUpdate = gql`
  mutation removeData($id: ID) {
    removeDataSchema(input: { id: $id }) {
      col1
    }
  }
`;
export function useDataListQuery(baseOptions: any) {
  return Apollo.useQuery<any>(DataListGet, { ...baseOptions });
}
export function useDataListMutation(baseOptions?: any) {
  return Apollo.useMutation<any>(DataListUpdate, { ...baseOptions });
}
