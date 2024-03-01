import { createTheme, } from "@mui/material";


const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '575px !important',
          padding: '0px !important',
        }
      },
    }
  },
  palette: {
    primary: {
      main: '#8f5206',
    }
  }
});

export default theme;
