import React from 'react';

import { Route } from 'mobx-router';

const Test = () => <p>Hello from the Home Page!</p>;

const routes = {
  home: new Route({
    path: '/',
    component: <Test />,
    beforeEnter: async () => {
      await console.log('Before going to the index');
    },
  }),
};

export default routes;
