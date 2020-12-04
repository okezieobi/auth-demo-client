import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Auth';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  );
}

export default App;
