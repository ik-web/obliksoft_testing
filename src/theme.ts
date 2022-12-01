import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans"',
    h2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.7
    },
    h3: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.7
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.2
    },
    overline: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.7
    }
  },
  palette: {
    background: {
      default: "#F5F5F5"
    },
    text: {
      primary: "#2F2525",
      secondary: '#37352F'
    },
    primary: {
      main: "#2C7DFA",
    },
    secondary: {
      main: '#9EC5FE'
    },
    success: {
      main: '#28A745'
    },
    error: {
      main: '#DC3545'
    },
    grey: {
      '50': '#DADADA',
      '100': '#ADB5BD'
    },
    divider: '#EAF2FF',
    action: {
      hover: '#CFE2FF'
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
          borderBottom: "none",
        },
      },
    },
  },
});
