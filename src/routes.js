import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content from './components/Content';
import Favorite from './components/Favorite';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Content} />
    <Route path="/favorite" exact component={Favorite} />
  </Switch>
);
