"use client";

import {
  AccountCircleOutlined,
  AddCircleOutline,
  ExploreOutlined,
  HomeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  Toolbar,
} from "@mui/material";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { NextLinkComposed } from "./NextLinkComposed";

const drawerWidth = 240;

function pathnameToIndex(pathname: string) {
  switch (pathname) {
    case "/":
      return 0;
    case "/explore":
      return 1;
    case "/host":
      return 2;
    case "/updates":
      return 3;
    case "/settings":
      return 4;
    default:
      return 0;
      break;
  }
}

export function NavLinks() {
  const pathname = usePathname();
  const [value, setValue] = useState(pathnameToIndex(pathname));
  return (
    <Fragment>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: { md: "none" },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeOutlined />}
            component={NextLinkComposed}
            to={{ pathname: "/" }}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Explore"
            icon={<ExploreOutlined />}
            component={NextLinkComposed}
            to={{ pathname: "/explore" }}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Host"
            icon={<AddCircleOutline />}
            component={NextLinkComposed}
            to={{ pathname: "/host" }}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Updates"
            icon={
              <Badge badgeContent={0} overlap="circular" color="primary">
                <NotificationsOutlined color="action" />
              </Badge>
            }
            component={NextLinkComposed}
            to={{ pathname: "/updates" }}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Settings"
            icon={<AccountCircleOutlined />}
            component={NextLinkComposed}
            to={{ pathname: "/settings" }}
          ></BottomNavigationAction>
        </BottomNavigation>
      </Paper>

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          zIndex: 100,
          width: drawerWidth,
          flexShrink: 0,
          display: {
            xs: "none",
            md: "initial",
          },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton
              selected={value == 0}
              onClick={() => setValue(0)}
              component={NextLinkComposed}
              to={{ pathname: "/" }}
            >
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Explore"} disablePadding>
            <ListItemButton
              selected={value == 1}
              onClick={() => setValue(1)}
              component={NextLinkComposed}
              to={{ pathname: "/explore" }}
            >
              <ListItemIcon>
                <ExploreOutlined />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Host"} disablePadding>
            <ListItemButton
              selected={value == 2}
              onClick={() => setValue(2)}
              component={NextLinkComposed}
              to={{ pathname: "/host" }}
            >
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary={"Host"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Updates"} disablePadding>
            <ListItemButton
              selected={value == 3}
              onClick={() => setValue(3)}
              component={NextLinkComposed}
              to={{ pathname: "/updates" }}
            >
              <ListItemIcon>
                <Badge badgeContent={0} overlap="circular" color="primary">
                  <NotificationsOutlined color="action" />
                </Badge>
              </ListItemIcon>
              <ListItemText primary={"Updates"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Settings"} disablePadding>
            <ListItemButton
              selected={value == 4}
              onClick={() => setValue(4)}
              component={NextLinkComposed}
              to={{ pathname: "/settings" }}
            >
              <ListItemIcon>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}
