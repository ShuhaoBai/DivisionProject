import styled from '@emotion/styled';
import { ITheme, Colors, Fonts } from '@default/services/ITheme';
import logoImage from '@default/resources/logo.svg';

export class Theme implements ITheme {

    colors: Colors = {
        primary: '#194173',
        text: '#0D1B2A',
        textSecondary: '#818a91',
        error: '#BE5959'
    }

    fonts: Fonts = {
        sizeDefault: '13px',
        base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        code: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
    }

    logo = logoImage;

    Label = styled('div')`
        font-weight: bold;
    `;

    PageTitle = styled('div')`
        padding: 20px 0;
        font-size: 20px;
        font-weight: 900;
        color: ${this.colors.primary};
    `;

}

export default new Theme();