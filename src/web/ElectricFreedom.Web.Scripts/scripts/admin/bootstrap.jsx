import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
// import { MobxRouter, RouterStore, startRouter } from 'mobx-router';

// import routes from './config/routes';
// import Layout from './views/shared/layout';

import App from './views/app';

const store = {
  // router: new RouterStore(),
};

// startRouter(routes, store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
