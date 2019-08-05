import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';

import store from './store'

export default function App() {
    return(
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}