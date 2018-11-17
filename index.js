import React from 'react'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'

import config from './src/GlobalState/Configuration/config'

const store = config()

const myRedux = () =>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => myRedux);
