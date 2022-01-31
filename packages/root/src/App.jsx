import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "shared/Styles";

import Navbar from './components/navbar';
import Footer from './components/footer'
import AsyncLoader from './components/asyncLoader'

const ItemRoutes = React.lazy(() => import('items/Routes'));

import store from 'shared/Store'

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/items">
              <AsyncLoader>
                <ItemRoutes />
              </AsyncLoader>
            </Route>
            <Redirect to="/items" from="/" />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>,
  document.getElementById('app'),
);
