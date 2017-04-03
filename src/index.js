import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import flightsReducer from './reducers';
import FlightsApp from './containers/FlightsApp';

const loggerMiddleware = createLogger();

let store = createStore(
  flightsReducer,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <div>
    <Provider store={store}>
      <FlightsApp />
    </Provider>
  </div>
  ,
  document.getElementById('root')
);