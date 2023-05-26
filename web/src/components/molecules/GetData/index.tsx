import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";

export type Props = {
  onClick?: () => void;
};

const RootPage: React.FC<Props> = ({ onClick }) => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [photo, setPhoto] = useState<any>();

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <Grid container m={1}>
      <Grid item xs={2}>
        <Button color="primary" variant="contained" onClick={onClick}>
          Get Location
        </Button>
      </Grid>
      <Grid container direction={"column"} item xs={10}>
        <Grid item xs={2}>
          <TextField label="ID" value={id} />
        </Grid>
        <Grid item xs={2}>
          <TextField label="NAME" value={name} />
        </Grid>
        <TextField label="DESC" value={description} />
        <TextField label="PHOTO" value={photo} />
      </Grid>
    </Grid>
  );
};

export default RootPage;
