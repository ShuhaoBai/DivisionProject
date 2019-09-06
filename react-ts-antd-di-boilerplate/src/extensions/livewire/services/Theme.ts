import { Theme as DefaultTheme }  from '@default/services/Theme';
import logoImage from '@extensions/resources/logo.png';

class Theme extends DefaultTheme {

  constructor() {
    super();

    // Override colors
    this.colors.primary = '#255859';
    this.colors.textSecondary = '#87babe';

    // Override logo image
    this.logo = logoImage;
  }

}

export default new Theme();