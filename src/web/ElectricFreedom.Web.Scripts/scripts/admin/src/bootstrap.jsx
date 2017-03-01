import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MobxRouter, RouterStore, startRouter } from 'mobx-router';

import routes from './config/routes';
import Layout from './views/shared/layout';

const store = {
  router: new RouterStore(),
};

startRouter(routes, store);

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <MobxRouter />
    </Layout>
  </Provider>,
  document.getElementById('app'),
);
