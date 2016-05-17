/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    Home,
} from './components';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);

module.exports = routes;


/**
Use  this line to generate gh-pages:
<Route path="/react-range-slider/" component={App}>
**/
