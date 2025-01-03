"use client";

import { Close, ShareOutlined } from "@mui/icons-material";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, MouseEventHandler, useState } from "react";


interface IShareButtonProps {
  variant: "full width" | "icon";
}

export default function ShareButton({variant} : IShareButtonProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleButtonClick : MouseEventHandler<HTMLButtonElement> = () => {
    const copyText = document.querySelector("#currentURL") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    setOpenSnackbar(true);
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <Fragment>
      <input type="text" name="currentURL" id="currentURL" className="hide-element" value={window.location.href}></input>
      {
        variant == "full width" &&
        <Button
          sx={{ textTransform: "none", borderRadius: 100 }}
          size="large"
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<ShareOutlined />}
          onClick={handleButtonClick}
        >
          Invite participant
        </Button>
      }
      {
        variant == "icon" &&
        <IconButton
          size="large"
          aria-label="copy share link"
          color="inherit"
          onClick={handleButtonClick}
        >
          <ShareOutlined />
        </IconButton>
      }
      <Snackbar
       open={openSnackbar}
       autoHideDuration={6000}
       onClose={handleCloseSnackbar}
       
       action={<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <Close fontSize="small" />
      </IconButton>}
      >
        <Alert severity="success" sx={{ width: '100%' }} onClose={handleCloseSnackbar}>Event link copied to clipboard successfully!</Alert>
      </Snackbar>
    </Fragment>
  )
}