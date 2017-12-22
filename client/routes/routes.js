import React from 'react';
import {Switch, Route} from 'react-router';
import {Root} from 'components';
import Home from 'home';

const Routes = () => (
  <Root>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Root>
);

export default Routes;
