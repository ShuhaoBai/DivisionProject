import { css } from 'emotion';
import { ITheme, Colors, Fonts } from '@default/services/ITheme';
import logo from '@default/resources/logo.svg';

export class Theme implements ITheme {

  protected colors: Colors = {
    primary: '#194173',
    text: '#0D1B2A',
    textSecondary: '#818a91',
    error: '#BE5959'
  }

  protected fonts: Fonts = {
    sizeDefault: '13px',
    base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    code: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
  }

  getColors() {
    return this.colors;
  }

  getFonts() {
    return this.fonts;
  }

  getLogo() {
    return logo;
  }

  getFlexboxStyle(direction: string, alignItems: string) {
    return css`
      display: flex;
      flex-direction: ${direction};
      align-items: ${alignItems};
    `;
  }

  getPageTitleStyle() {
    return css`
        padding: 20px 0;
        font-size: 20px;
        font-weight: 900;
        color: ${this.getColors().primary};
      `;
  }

}

export default new Theme();