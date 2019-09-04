import { injectable } from 'inversify';
import { ReactiveService } from 'react-injection';
import { css } from 'emotion';
import logo from 'extensions/default/resources/logo.svg';
import { ThemeService, ThemeServiceState } from 'services/interfaces/ThemeService';

@injectable()
export default class ThemeServiceImpl extends ReactiveService<ThemeServiceState> implements ThemeService {
  
  protected state: ThemeServiceState = {
    colors: {
      primary: '#194173',
      text: '#0D1B2A',
      textSecondary: '#818a91'
    },

    fonts: {
      sizeDefault: '13px',
      base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
      code: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
    },

  };

  getColors() {
      return this.state.colors;
  }

  getFonts() {
    return this.state.fonts;
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
        padding: 40px;
        font-size: 20px;
        font-weight: 900;
        color: ${this.getColors().primary};
      `;
  }

}