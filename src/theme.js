import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff5252",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#fff",
        },
      },
    },
  },
});

export default theme;
