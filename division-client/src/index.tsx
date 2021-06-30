// NPM packages
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import 'mobx-react-lite/batchingForReactDom';

// All other imports
import App from 'components/App';
import Services from 'services/Services'; // {NotesStore}
import { ServicesProvider } from 'services'; // RootStateContext
import DummyService from 'services/DummyService';
import createMuiTheme from 'styles/createMuiTheme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

const theme = createMuiTheme();

const services: Services = {
  dummyService: new DummyService(),
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ServicesProvider services={services}>
          <ScrollToTop />
          <App />
        </ServicesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
