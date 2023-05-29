import { Grid } from "@mui/material";
import React from "react";
import MoleculeGetData from "src/components/molecules/GetData";
import MoleculeUpdateData from "src/components/molecules/UpdateData";

import useHooks from "./hooks";

const RootPage: React.FC = () => {
  const { datas, handlFind } = useHooks();
  return (
    <Grid container direction={"column"}>
      <MoleculeGetData datas={datas} onClick={handlFind} />
      {/* <MoleculeUpdateData onClick={createUser} /> */}
    </Grid>
  );
};

export default RootPage;
