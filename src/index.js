import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import mySaga from './saga';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
   window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;
const enhancer = composeEnhancers(
   applyMiddleware(sagaMiddleware),
);

const store = createStore(
   rootReducer, enhancer
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
