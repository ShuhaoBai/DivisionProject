import { Theme as DefaultTheme }  from '@default/services/Theme';
import logo from '@extensions/resources/logo.png';

class Theme extends DefaultTheme {

  constructor() {
    super();

    // Override colors
    this.colors.primary = '#255859';
    this.colors.textSecondary = '#87babe';
  }

  getLogo() {
    return logo;
  }
  
}

export default new Theme();