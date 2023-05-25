import React from "react";
import OrganismRootPage from "src/components/organisms/Default/RootPage";

export type Props = {
  path?: string;
};

const RootPage: React.FC<Props> = () => {
  return <OrganismRootPage />;
};

export default RootPage;
