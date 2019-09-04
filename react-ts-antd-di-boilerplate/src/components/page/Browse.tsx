import React from 'react';
import { ThemeService } from 'services/interfaces/ThemeService';

type MyProps = { 
  themeService: ThemeService
};
type MyState = { };

export default class Browse extends React.Component<MyProps, MyState> {
 
  render() {
    const themeService: ThemeService = this.props.themeService;

    return (
      <div className={themeService.getPageTitleStyle()}>Browse Page</div>
    );
  }
}
