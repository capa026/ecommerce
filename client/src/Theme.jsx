import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#032B28",
      light: "#024741",
      lighter: "#195852",
    },

    primaryGradient: {
      main: "linear-gradient(to right bottom,#032B28,#024741,#195852,#032B28)",
    },
  },
});

export const locateColor = (color) => (theme) => {
  const colors = color.split(".");

  if (colors.length > 1) return theme.palette[colors[0]][colors[1]];

  return theme.palette[colors[0]]["main"];
};
