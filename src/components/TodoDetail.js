import React from 'react';
import $ from 'jquery'
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

import TodoList from './TodoList';
import {loadTodo} from '../actions/TodoActionCreators';

export default class extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
    //  todos: this.props
    //}
  };

  componentDidMount() {
    loadTodo();
  }

  componentWillUnmount() {
  }

  render() {
    let {todo} = this.props;
    return (
      <div>
      </div>
    )
  }
}
