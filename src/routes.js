import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio}/>
      </Switch>
    </BrowserRouter>
  );
}