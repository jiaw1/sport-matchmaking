import { ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { Fragment } from "react";
import UpdateAvatar from "./updateAvatar";



export default function UpdateListTile() {

  return (
    <ListItem alignItems="flex-start" secondaryAction={
      <Fragment>
        <Typography variant="overline" sx={{color:"rgb(var(--color-on-surface-variant))", fontWeight: 500, textTransform: "none"}}>
          1d
        </Typography>
      </Fragment>
    } sx={{backgroundColor: "#fef7ff", ".MuiListItemSecondaryAction-root" : {top: "30%"}}}>
        <ListItemAvatar sx={{minHeight: 64, mr: 1}}>
          <UpdateAvatar sport="basketball" type="participant"></UpdateAvatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{fontSize: 16, lineHeight: "150%", letterSpacing: 0.5, color:"rgb(var(--color-on-surface-light))"}}>
                Jane Doe will not attend
            </Typography>
          }
          secondary={
            <Fragment>
              <Typography sx={{fontSize:14, lineHeight: "142%", letterSpacing: 0.25}}>
                Basketball · 06/10 · 16.00 - 17.00
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
  )
}