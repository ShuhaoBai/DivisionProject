export interface Colors {
    // Any key/value pair is accepted, but 
    [key: string]: any;

    // You can add specific names if they must be specified (helps with auto-complete)
    primary: string;
    text: string;
    textSecondary: string;
};

export interface Fonts {
    // Any key/value pair is accepted, but 
    [key: string]: any;

    // You can add specific names if they must be specified (helps with auto-complete)
    sizeDefault: string;
    base: string;
    code: string;
};

export interface ThemeServiceState {
    colors: Colors;
    fonts: Fonts;
};

export interface ThemeService {
    getColors(): Colors;
    getFonts(): Fonts;
    getLogo(): any; // not sure the return type of imported image
    getFlexboxStyle(direction: string, alignItems: string): string;
    getPageTitleStyle(): string;
};

// We need a key in order to look it up from the container
export const ThemeServiceKey = Symbol.for('ThemeService');
