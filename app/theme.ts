import { createTheme } from "@mui/material";

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
    secondaryContainer: customTheme.palette.augmentColor({
      color: {
        main: '#E8DEF8'
      },
      name: "secondaryContainer",
    }),
    tertiary: customTheme.palette.augmentColor({
      color: {
        main: '#7D5260',
      },
      name: 'tertiary',
    })
  },
});

export default customTheme;