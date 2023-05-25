import { Button, Grid } from "@mui/material";
import React from "react";

export type Props = {
  onClick?: () => void;
};
const RootPage: React.FC<Props> = ({ onClick }) => {
  return (
    <Grid m={1}>
      <Button color="primary" variant="contained" onClick={onClick}>
        update Data
      </Button>
    </Grid>
  );
};

export default RootPage;
