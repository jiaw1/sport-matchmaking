"use client";

import { Button, Dialog, DialogTitle, Typography, IconButton, styled, DialogContent, ListItemAvatar, List, ListItem, Avatar, ListItemText  } from "@mui/material";
import { Close, Person } from "@mui/icons-material";
import { Fragment, useState } from "react";
import DetailText from "./typography/DetailText";

const CustomDialogTitle = styled(DialogTitle)(() => ({
  '& .MuiTypography-root': {
    fontSize:28, 
    fontWeight: "bold", 
    lineHeight:1.28,
    letterSpacing: 0,
  },
}));


export default function ViewParticipantsModal() {
  const [open, setOpen] = useState(false);
  const owner = true;
  return (
    <Fragment>
      <Button sx={{textTransform:"none"}} size="small" className="" onClick={() => setOpen(true)}>
        <Typography variant="body2" className="text-on-surface-variant-light underline relative right-[5px]">View participants</Typography>
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open} aria-labelledby="participant-list-title" fullWidth sx={{borderRadius: 2}} >
        <CustomDialogTitle id="participant-list-title" className="!bg-surface-bright-light">Participants</CustomDialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
        <DialogContent className="!bg-surface-bright-light max-h-[50vh]">
          <List>
              {Array.from(Array(10)).map((_, index) => (
            <ListItem divider disableGutters key={index} secondaryAction={owner? <DetailText>Owner</DetailText> : <></>}>
              <ListItemAvatar>
                <Avatar>
                  <Person></Person>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Participant name" secondary="participant.name@aalto.fi"></ListItemText>
            </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}