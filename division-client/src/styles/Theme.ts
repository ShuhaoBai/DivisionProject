import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: (factor) => `${8 * factor}px`,
  palette: {
    primary: {
      main: '#000000', // black title
    },
    secondary: {
      main: '#d77900', // PNNL Brown
    },
    metrics: {
      main: '#53b03f',
    },
  },
  typography: {
    fontFamily: "'Montserrat',sans-serif",
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
    subtitle1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.5715',
      fontVariant: 'tabular-nums',
    },
    body2: {
      fontSize: '1.25rem',
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
theme.typography.h2.color = theme.palette.primary.main;
theme.typography.h3.color = theme.palette.secondary.main;
theme.typography.h4.color = theme.palette.secondary.main;
theme.typography.h5.color = theme.palette.secondary.main;
theme.typography.subtitle1.color = theme.palette.primary.main;
export default theme;
