import { FetchResult } from "@apollo/client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

export type Props = {
  onClick: (data: {
    newName: string;
    email: string;
  }) => Promise<FetchResult<any>>;
};
const RootPage: React.FC<Props> = ({ onClick: createUser }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleClick = useCallback(async () => {
    await createUser({ newName: name, email });
  }, [createUser, name, email]);

  const handleUsernameInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.currentTarget.value;
      setName(newValue);
    },
    []
  );

  const handleUserEmailInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.currentTarget.value;
      setEmail(newValue);
    },
    []
  );

  return (
    <Grid container m={1}>
      <Grid item xs={2}>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Create
        </Button>
      </Grid>
      <Grid container direction={"column"} item xs={3}>
        <TextField value={name} onChange={handleUsernameInput} fullWidth />
        <TextField value={email} onChange={handleUserEmailInput} fullWidth />
      </Grid>
    </Grid>
  );
};

export default RootPage;
