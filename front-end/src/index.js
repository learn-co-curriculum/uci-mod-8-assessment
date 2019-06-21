import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// No work needs to be done in this file

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
