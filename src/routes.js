import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Game from './center';

export default (
  <Route path='/' component={App}>
    <Route path='center' component={Game} />
  </Route>
);
