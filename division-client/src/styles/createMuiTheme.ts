import {
  createMuiTheme as defaultCreateMuiTheme,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    // Custom theme properties go here
    myColor: {
      danger: string;
    };
  }
  interface ThemeOptions {
    // Allow users to configure the custom properties by also adding
    // the custom properties here
    myColor?: {
      danger?: string;
    };
  }
}

export default function createMuiTheme(themeName?: ThemeOptions): Theme {
  return defaultCreateMuiTheme(themeName);
}
