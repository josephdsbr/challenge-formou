import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

export interface OwnProps extends RouteProps {
  component: React.FC<{}>;
  redirectTo: string;
  isPrivate?: boolean;
}

const RouteWrapper: any = (
  {
    component: Component,
    isPrivate,
    redirectTo,
    ...rest
  }: OwnProps,
) => {

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return <Route
    {...rest}
    render={(props: any) => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
};

export default RouteWrapper;
