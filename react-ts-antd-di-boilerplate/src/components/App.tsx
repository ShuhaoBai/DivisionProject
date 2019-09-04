import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { css } from 'emotion';
import { injectComponent, ServiceProps, serviceKeys } from 'services/container';
import 'components/App.less'; // you can set styles in less file if you prefer to use antd variables
import Header from '@extensions/components/core/Header';
import Home from 'components/page/Home';
import Search from 'components/page/Search';
import Browse from 'components/page/Browse'

const App = (props: ServiceProps) => {
  const themeService = props.themeService;
  const appStyle = css`
    font-family: ${themeService.getFonts().base};
    font-size: ${themeService.getFonts().sizeDefault};
    width: 100%;
    ${themeService.getFlexboxStyle('column', 'flex-start')}
    flex: 1;
  `

  const renderHome = (compProps) => <Home {...compProps} themeService={props.themeService} />;
  const renderSearch = (compProps) => <Search {...compProps} themeService={props.themeService} />;
  const renderBrowse = (compProps) => <Browse {...compProps} themeService={props.themeService} />;

  return (
    <div className={appStyle}>
      <Router>
        <Header themeService={props.themeService} />
        <main>
          <Switch>
            <Route exact path="/" render={renderHome} />
            <Route exact path="/search" render={renderSearch} />
            <Route exact path="/browse" render={renderBrowse} />
          </Switch>
        </main>
        <div className="hello-box">HELLO WORLD</div>
      </Router>
    </div>
  );
}

export default injectComponent<ServiceProps>(serviceKeys)(App);

