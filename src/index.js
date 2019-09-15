import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./containers/Dashboard";
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

serviceWorker.unregister();
