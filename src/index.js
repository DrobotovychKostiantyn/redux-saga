import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import index from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/watchers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(index, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

