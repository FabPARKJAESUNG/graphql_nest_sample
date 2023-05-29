import { QueryResult } from "@apollo/client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

export type Props = {
  datas: any;
  onClick: (props: {
    name: string;
  }) => Promise<QueryResult<any, { name: string }>>;
};

const RootPage: React.FC<Props> = ({ datas, onClick }) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const handleClick = useCallback(() => {
    onClick({ name: "pasona1" });
  }, [onClick]);

  useEffect(() => {
    if (datas) {
      setName(datas.user.name);
      setEmail(datas.user.email);
    }
  }, [datas]);

  return (
    <Grid container m={1}>
      <Grid item xs={2}>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Get Pasona1
        </Button>
      </Grid>
      <Grid container direction={"column"} item xs={3}>
        <TextField value={name} disabled fullWidth />
        <TextField value={email} disabled fullWidth />
      </Grid>
    </Grid>
  );
};

export default RootPage;
