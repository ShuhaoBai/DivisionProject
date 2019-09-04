import DefaultThemeServiceImpl  from 'extensions/default/services/ThemeServiceImpl';
import logo from '@extensions/resources/logo.png';

export default class ThemeServiceImpl extends DefaultThemeServiceImpl {

  constructor() {
    super();

    // Override colors
    this.state.colors = {
      primary: '#255859',
      text: '#0D1B2A',
      textSecondary: '#87babe'
    }
  }

  getLogo() {
    return logo;
  }
  
}