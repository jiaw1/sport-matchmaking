import { createTheme } from "@mui/material";

// Augment the palette to include a secondary container color
declare module '@mui/material/styles' {
  interface Palette {
    secondaryContainer: Palette['primary'];
  }

  interface PaletteOptions {
    secondaryContainer?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include a secondary container option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    secondaryContainer: true;
  }
}

// Update the Chip's color options to include a secondary container option
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    secondaryContainer: true;
  }
}

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