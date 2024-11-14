"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, Container} from "@mui/material";
import { NavLinks } from "./NavLinks";

let customTheme = createTheme({
  palette: {
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

customTheme = createTheme(customTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: customTheme.palette.augmentColor({
      color: {
        main: '#65558f',
      },
      name: 'primary',
    }),
    tertiary: customTheme.palette.augmentColor({
      color: {
        main: '#7D5260',
      },
      name: 'tertiary',
    })
  },
});


export default function AppFrame({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider theme={customTheme}>
            <Box className="flex">
              <CssBaseline/>
              <NavLinks/>
              <Container
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, mt: 6, mb: {xs: 8} }} maxWidth="md"
                >
                {children}
              </Container>
            </Box>
    </ThemeProvider>
)
}