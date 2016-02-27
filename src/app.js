import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/TodoApp';

require('bootstrap-webpack');
require('./styles/common.less');

ReactDOM.render(<App/>, document.getElementById("main"));
