import { Button } from "@mui/material";
import React from "react";

export type Props = {
  loading?: boolean;
};

const RootPage: React.FC<Props> = ({ loading }) => {
  return <Button>get Data</Button>;
};

export default RootPage;
