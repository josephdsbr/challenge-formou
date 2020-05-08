import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import TasksList from '../pages/TasksList';
import User from '../pages/User';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" redirectTo="/tasks" exact component={Home} />
      <Route path="/tasks" exact component={TasksList} />
      <Route path="/user" exact component={User} />
    </Switch>
  )
}