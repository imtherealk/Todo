import React from 'react';
import {CircularProgress} from 'material-ui';

import TodoList from './TodoList';
import {STATUS} from '../actions/TodoActionCreators';

export default class extends React.Component {

  renderNothing() {
    return <div/>;
  }

  renderLoading() {
    return (
      <center>
        <CircularProgress/>
      </center>
    );
  }

  renderSome() {
    let {todos} = this.props;
    return (
      <TodoList todos={todos}/>
    );
  }

  renderNone() {
    return <div>항목이 없습니다</div>
  }

  render() {
    let {status} = this.props;
    let statusMap = {
      [STATUS.NOTHING]: this.renderNothing.bind(this),
      [STATUS.LOADING]: this.renderLoading.bind(this),
      [STATUS.SOME]: this.renderSome.bind(this),
      [STATUS.NONE]: this.renderNone.bind(this)
    };
    return statusMap[status]();
  }
}
