import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MobxRouter, RouterStore, startRouter } from 'mobx-router';

import routes from './config/routes';

const store = {
  router: new RouterStore(),
};

startRouter(routes, store);

ReactDOM.render(
  <Provider store={store}>
    <MobxRouter />
  </Provider>,
  document.getElementById('app'),
);
