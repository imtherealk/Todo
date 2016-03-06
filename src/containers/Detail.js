import React from 'react';
import {Container} from 'flux/utils';

import TodoDetailStore from '../stores/TodoDetailStore';
import EntityStore from '../stores/EntityStore';
import TodoDetail from '../components/TodoDetail';

import {checkTodo} from '../actions/todo';
import {
  STATUS,
  loadDetail,
  setStatus,
  setItem
} from '../actions/todoDetail';
import {emulateEvent} from '../util';


class Detail extends React.Component {
  static getStores() {
    return [TodoDetailStore, EntityStore];
  }

  static calculateState(prevState) {
    let state = TodoDetailStore.getState();
    return {
      todo: TodoDetailStore.getItem(),
      status: state.status,
      shouldLoad: (state.status == STATUS.NOTHING)
    };
  }

  componentDidMount() {
     if (this.state.shouldLoad) {
       emulateEvent(() => loadDetail(this.props.id));
     }
  }

  handleCheckTodo() {
    let {todo} = this.state;
    checkTodo(todo.id)
  }

  render() {
    return <TodoDetail todo={this.state.todo}
                       status={this.state.status}
                       onCheckTodo={this.handleCheckTodo.bind(this)}/>;
  }
}

const DetailContainer = Container.create(Detail);

export default class extends React.Component {
  updateStore(props) {
    let {id} = props.params;
    if (EntityStore.hasTodo(id)) {
      setItem(id);
      setStatus(STATUS.ONE);
    } else {
      setStatus(STATUS.NOTHING);
    }
  }
  componentWillMount() {
    this.updateStore(this.props);
  }
  componentWillUpdate(nextProps) {
    this.updateStore(nextProps);
  }

  render() {
    let {id} = this.props.params;
    return (
      <DetailContainer id={id}/>
    );
  }
}
