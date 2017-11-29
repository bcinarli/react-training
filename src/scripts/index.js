/**
 * index
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react';
import Container from './containers/index.js';
import {store} from './common/store';
const ROOT_NODE = document.querySelector('#my-app');

let render = () => {
    ReactDOM.render(
        <AppContainer errorReporter={Redbox}>
            <Container store={store}/>
        </AppContainer>,
        ROOT_NODE
    )
};

render();