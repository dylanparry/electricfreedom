import React from 'react';
import { inject } from 'mobx-react';
import { Link } from 'mobx-router';

const propTypes = {
  children: React.PropTypes.node.isRequired,
  store: React.PropTypes.object.isRequired,
  view: React.PropTypes.object.isRequired,
  params: React.PropTypes.object,
};

const defaultProps = {
  params: {},
};

export const link = ({ store, view, params, children }) => (
  <Link view={view} params={params} store={store}>{children}</Link>
);

link.propTypes = propTypes;
link.defaultProps = defaultProps;

export default inject('store')(link);
