import { List, Divider } from "@mui/material";
import React from "react";
import UpdateListTile from "./updateListTile";

export default function UpdateList() {
  return (
    <List >
      <UpdateListTile></UpdateListTile>
      <Divider variant="fullWidth" component="li" />
      <UpdateListTile></UpdateListTile>
      <Divider variant="fullWidth" component="li" />
      <UpdateListTile></UpdateListTile>
      <Divider variant="fullWidth" component="li" />
    </List>
  )
}