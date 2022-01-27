import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ItemList from '../itemList';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <Route exact path={path}>
      <ItemList />
    </Route>
  );
};

export default Routes;