import {
  createMuiTheme as defaultCreateMuiTheme,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    // Custom theme properties go here
  }
  interface ThemeOptions {
    // Allow users to configure the custom properties by also adding
    // the custom properties here
  }
}

export default function createMuiTheme(options?: ThemeOptions): Theme {
  return defaultCreateMuiTheme(options);
}
