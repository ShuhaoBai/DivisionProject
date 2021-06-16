//🔥 copied from dap/dap/client/src/themeTyping.ts

import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    contentWidth: {
      min: string;
      max: string;
    };
    FilterTitle: {
      root: React.CSSProperties;
      titleText: React.CSSProperties;
    };
    linkIcon: {
      marginBottom: number;
    };
    FullPageForm: {
      root: any;
      form: any;
      formFooter: any;
    };
    Stat: {
      statValue: any;
      statDescription: any;
    };
    monoFontFamily: string;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    contentWidth: {
      min: string;
      max: string;
    };
    FilterTitle: {
      root: React.CSSProperties;
      titleText: React.CSSProperties;
    };
    linkIcon: {
      marginBottom: number;
    };
    FullPageForm: {
      root: any;
      form: any;
      formFooter: any;
    };
    Stat: {
      statValue: any;
      statDescription: any;
    };
    monoFontFamily?: string;
  }
}
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    metrics?: Palette['primary'];
  }
  interface PaletteOptions {
    metrics?: PaletteOptions['primary'];
  }
}
