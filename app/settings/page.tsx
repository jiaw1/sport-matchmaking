"use client";

import { Avatar, Box, Button, Divider, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Image from "next/image";
import AppHeader from "../components/typography/AppHeader";
import { getSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useState, useEffect } from "react";
import { InfoOutlined, NavigateNext, PrivacyTipOutlined, StadiumOutlined, TuneOutlined } from "@mui/icons-material";

export default function UpdatesPage() {
  const [session, setSession] = useState<Session | null>(null);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = window.location.origin + "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
    
  }

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);
  

  console.log(session)
  return (
    <Box>
      <AppHeader>
        Settings
      </AppHeader>
      <List sx={{mt:5}}>
        <ListItem sx={{backgroundColor: "#fef7ff", py: 2}} secondaryAction={
            <IconButton edge="start" aria-label="to profile settings">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar alt={session?.user?.name || ""} src="/static/images/avatar/1.jpg">              
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={session?.user?.name || ""} secondary={session?.user?.email || ""} />
        </ListItem>
      </List>
      <List sx={{mt:5}}>
        <ListItem sx={{backgroundColor: "#fef7ff"}} alignItems="center" secondaryAction={
            <IconButton edge="start" aria-label="to your matches">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor: "transparent"}}>
                <Icon sx={{ height: "24px", width: "24px" }}>
                  <Image
                    src={`/icons/settings/your matches.svg`}
                    alt={`your matches icon`}
                    width={24}
                    height={24}
                  ></Image>
                </Icon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Your matches" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{backgroundColor: "#fef7ff"}} alignItems="center" secondaryAction={
            <IconButton edge="start" aria-label="to preferences">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor: "transparent"}}>
                <TuneOutlined sx={{color: "#65558F"}}></TuneOutlined>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Preferences" />
        </ListItem>
      </List>
      <List sx={{mt:4}}>
        <ListItem sx={{backgroundColor: "#fef7ff"}} alignItems="center" secondaryAction={
            <IconButton edge="start" aria-label="to Venues">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor: "transparent"}}>
                <StadiumOutlined sx={{color: "#65558F"}}></StadiumOutlined>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Venues" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{backgroundColor: "#fef7ff"}} alignItems="center" secondaryAction={
            <IconButton edge="start" aria-label="to about this app">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor: "transparent"}}>
                <InfoOutlined sx={{color: "#65558F"}}></InfoOutlined>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="About this app" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem sx={{backgroundColor: "#fef7ff"}} alignItems="center" secondaryAction={
            <IconButton edge="start" aria-label="to privacy policy">
                <NavigateNext></NavigateNext>
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{backgroundColor: "transparent"}}>
                <PrivacyTipOutlined sx={{color: "#65558F"}}></PrivacyTipOutlined>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Privacy policy"/>
        </ListItem>
      </List>
      <Button sx={{textTransform:"none", borderRadius:100, mt: 4}} size="large" disableElevation fullWidth variant="contained" color="tertiary" onClick={handleSignOut}>Sign out</Button>
    </Box>

  )
}