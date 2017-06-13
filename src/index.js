import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();
console.log("store",store)
const render = Component =>
    ReactDOM.render(
            <Provider store={store}>
                <Component />
            </Provider>
        ,
        document.getElementById('root')
    );
render(App)

registerServiceWorker();
