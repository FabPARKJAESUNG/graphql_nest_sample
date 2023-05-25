import { Grid } from "@mui/material";
import React from "react";
import MoleculeGetData from "src/components/molecules/GetData";
import MoleculeUpdateData from "src/components/molecules/UpdateData";

const RootPage: React.FC = () => {
  return (
    <Grid container direction={"column"}>
      <MoleculeGetData />
      <MoleculeUpdateData />
    </Grid>
  );
};

export default RootPage;
