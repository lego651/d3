import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

// import store from './store'
import { store, persistor } from './store'
import Home from './components/Home';
import Chat from './components/ChatContainer'
import NotFound from './components/NotFound'
import * as serviceWorker from './utils/serviceWorker';

const routing = (
  <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/:id" component={Chat} />
        <Route component={NotFound} />
      </Switch>
  </Router>
)

// ReactDOM.render(
//   <Provider store={store}>
//     { routing }
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      { routing }
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
