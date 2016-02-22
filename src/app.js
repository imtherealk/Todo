import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

require('bootstrap-webpack');
require('./styles/common.less');
ReactDOM.render(<TodoApp/>, document.getElementById("main"));
