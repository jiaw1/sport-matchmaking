import type { Config } from "tailwindcss";
import {withMaterialColors} from "tailwind-material-colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

module.exports = withMaterialColors(config, {
  // Your base colors as HEX values. 'primary' is required.
  primary: '#65558F',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color.
  secondary: '#625B71',
  tertiary: '#7D5260',
  // add any named colors you need:
  green: '#00ff00',
  blue: '#0000ff'
  },
  {
  /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
  scheme: 'tonalSpot',
  // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
  contrast: 0,
  extend: false,
  });
