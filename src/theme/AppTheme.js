import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Arial",
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#2F7ABF"
    },
    secondary: {
      main: "#3C4551"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {

        },
        disableRipple: true
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
})

const AppTheme = (props) => {

  return (

    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

  )

}

export default AppTheme;
