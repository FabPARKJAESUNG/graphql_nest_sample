import { FetchResult } from "@apollo/client";
import { Button, Grid } from "@mui/material";
import React from "react";

export type Props = {
  onClick?: (data: {
    name: string;
    email: string;
  }) => Promise<FetchResult<any>>;
};
const RootPage: React.FC<Props> = ({ onClick }) => {
  return (
    <Grid m={1}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (onClick) {
            // onClick({ name: "test", email: "test" });
          }
        }}
      >
        update Data
      </Button>
    </Grid>
  );
};

export default RootPage;
