import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import UsersList from '../pages/UsersList';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={UsersList} />
    </Switch>
  )
}