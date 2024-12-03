"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  styled,
  DialogContent,
  ListItemAvatar,
  List,
  ListItem,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Close, Person } from "@mui/icons-material";
import { Fragment, useState } from "react";
import DetailText from "./typography/DetailText";
import { IParticipation, IUserData } from "../lib/definitions";

const CustomDialogTitle = styled(DialogTitle)(() => ({
  "& .MuiTypography-root": {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 1.28,
    letterSpacing: 0,
  },
}));

interface IViewParticipantsModalProps {
  participants: IParticipation[];
  hostID: string;
  participantInfoRecord: Record<string, IUserData>;
}

export default function ViewParticipantsModal({
  participants,
  hostID,
  participantInfoRecord,
}: Readonly<IViewParticipantsModalProps>) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button
        sx={{ textTransform: "none" }}
        size="small"
        className=""
        onClick={() => setOpen(true)}
      >
        <Typography
          variant="body2"
          className="text-on-surface-variant-light underline relative right-[5px]"
        >
          View participants
        </Typography>
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        aria-labelledby="participant-list-title"
        fullWidth
        sx={{ borderRadius: 2 }}
      >
        <CustomDialogTitle
          id="participant-list-title"
          className="!bg-surface-bright-light"
        >
          Participants
        </CustomDialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
        <DialogContent className="!bg-surface-bright-light max-h-[50vh]">
          <List>
            {participants.map((participation) => (
              <ListItem
                divider
                disableGutters
                key={`${participation.matchId}:${participation.userId}`}
                secondaryAction={
                  participation.userId == hostID ? (
                    <DetailText>Owner</DetailText>
                  ) : (
                    <></>
                  )
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Person></Person>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    participantInfoRecord[participation.userId]?.firstName ??
                    "Unknown"
                  }
                  secondary={
                    participantInfoRecord[participation.userId]?.username ??
                    participation.userId
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
