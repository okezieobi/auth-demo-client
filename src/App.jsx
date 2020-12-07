import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Form />
      </Route>
    </Switch>
  );
}

export default App;
