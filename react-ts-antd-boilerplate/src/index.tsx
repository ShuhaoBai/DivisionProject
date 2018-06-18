import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from 'components/App';
import registerServiceWorker from 'services/registerServiceWorker';

// TODO: url should be set via webpack config parameter
const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

// This is the starting point to the react application.  It will 
// render the App component into the <div id="root"></div> element
// of the html.  The template html used by webpack can be found in the 
// public folder, sibling to src and node_modules.
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

// This comes with create-react-app by default.  It allows us to 
// register javascript as a service worker in the browser, which 
// caches content to allow user to interact with the app in low or no
// internet connectivity.
registerServiceWorker();
