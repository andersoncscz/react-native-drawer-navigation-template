import React from 'react';
import { StatusBar } from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));


export default DrawerNavigatorApp = props => (
    <Provider store={store}>
        <Router>
            
        </Router>
    </Provider>          
);