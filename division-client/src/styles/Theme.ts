//🔥 copied from dap/dap/client/src/dapclient/services/Theme.ts

import { createMuiTheme } from '@material-ui/core/styles';
// import themeTyping from '../themeTyping';
// import 'fontsource-ibm-plex-mono';

const theme = createMuiTheme({
  spacing: (factor) => `${8 * factor}px`,
  palette: {
    primary: {
      main: '#262626', // dark dark grey, header bar
    },
    secondary: {
      main: '#53b03f', // green used in header fonts
      light: '#A7D79D',
    },
    metrics: {
      main: '#53b03f',
    },
  },
  typography: {
    fontFamily: "'Open Sans',sans-serif",
    h1: {
      fontWeight: 'bold',
      fontSize: '1.7rem',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '1.3rem',
    },
    h3: {
      fontSize: '0.875rem',
    },
    h4: {
      fontSize: '0.875rem',
    },
    h5: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.5715',
      fontVariant: 'tabular-nums',
    },
  },
  contentWidth: {
    max: '1000px',
    min: '300px',
  },
  FilterTitle: {
    root: {},
    titleText: {},
  },
  linkIcon: {
    marginBottom: -5,
  },
  FullPageForm: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      marginBottom: 15,
      maxWidth: 450,
    },
    formFooter: {
      marginBottom: 15,
      textAlign: 'center',
    },
  },
  Stat: {
    statValue: {
      fontSize: '2rem',
      lineHeight: 1,
      // color: theme.palette.secondary.main,
      fontFamily: "'Oswald',sans-serif",
    },
    statDescription: {
      fontSize: 10,
    },
  },
  monoFontFamily: "'IBM Plex Mono', monospace",
});
theme.Stat.statValue.color = theme.palette.secondary.main;
theme.typography.h1.color = theme.palette.secondary.main;
theme.typography.h2.color = theme.palette.secondary.main;
theme.typography.h3.color = theme.palette.secondary.main;
theme.typography.h4.color = theme.palette.secondary.main;
theme.typography.h5.color = theme.palette.secondary.main;
theme.typography.subtitle1.color = theme.palette.primary.main;

// theme.overrides = {
//   MuiLink: {
//     root: {
//       color: '#005b82',
//       '&:hover': {
//         color: '#005b82',
//       },
//     },
//   },
//   MuiAccordion: {
//     root: {
//       '&&:before': {
//         opacity: '0',
//       },
//       border: '1px solid rgba(0, 0, 0, .125)',
//       borderBottom: 'none',
//       '&.Mui-expanded': {
//         marginTop: 0,
//         marginBottom: 0,
//       },
//     },
//   },
//   MuiAccordionSummary: {
//     root: {
//       color: theme.palette.secondary.main,
//       backgroundColor: '#f8f8f8',
//     },
//     content: {
//       marginBottom: 3,
//       marginTop: 3,
//       '&.Mui-expanded': {
//         marginBottom: 3,
//         marginTop: 3,
//       },
//     },
//   },
//   MuiAccordionDetails: {
//     root: {
//       borderTop: '1px solid rgba(0, 0, 0, .125)',
//       padding: '23px 16px',
//     },
//   },
//   MuiTab: {
//     root: {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
//   MuiTabs: {
//     root: {},
//     indicator: {
//       backgroundColor: '#53b03f',
//     },
//   },
//   MuiTableCell: {
//     head: {
//       color: theme.palette.secondary.main,
//       fontWeight: theme.typography.fontWeightMedium,
//       fontSize: '1rem',
//     },
//   },
//   MuiCard: {
//     root: { border: '1px solid rgba(0, 0, 0, .125)' },
//   },
//   MuiTableHead: {
//     root: {
//       backgroundColor: '#f8f8f8',
//     },
//   },
//   MuiTable: {
//     root: { border: '1px solid rgba(0, 0, 0, .125)' },
//   },
// };
export default theme;
