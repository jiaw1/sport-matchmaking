"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Container} from "@mui/material";
import CustomTheme from "./theme";
import { NavLinks } from "./components/NavLinks";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




export default function AppFrame({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider theme={CustomTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box className="flex">
              <CssBaseline/>
              <NavLinks/>
              <Container
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, mt: 4, mb: {xs: 8} }} maxWidth="md"
                >
                {children}
              </Container>
            </Box>
      </LocalizationProvider>
    </ThemeProvider>
)
}