

export type Colors = {
  // Any key/value pair is accepted, but 
  [key: string]: any;

  // You can add specific names if they must be specified (helps with auto-complete)
  primary: string;
  text: string;
  textSecondary: string;
  error: string;
};

export type Fonts = {
  // Any key/value pair is accepted, but 
  [key: string]: any;

  // You can add specific names if they must be specified (helps with auto-complete)
  sizeDefault: string;
  base: string;
  code: string;
};

export interface ITheme  {
  
  getColors(): Colors;
  getFonts(): Fonts;
  getLogo() : any;
  getFlexboxStyle(direction: string, alignItems: string): string;
  getPageTitleStyle(): string;

}
