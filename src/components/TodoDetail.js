import React from 'react';
import {
  List,
  ListItem,
  TextField,
  Checkbox
} from 'material-ui';

import TodoList from './TodoList';
import {loadDetail, checkTodo} from '../actions/TodoActionCreators';
import {emulateEvent} from 'util';

export default class extends React.Component {
  componentDidMount() {
    emulateEvent(loadDetail(this.props.id));
  }

  componentWillUnmount() {
  }

  onCheck(event, id) {
    checkTodo(id);
  }

  render() {
    let {id, todo} = this.props;
    return (
      <List>
        <ListItem>
          <TextField
            key="content"
            disabled={true}
            value={todo.content}
            floatingLabelText="할 일"/>
        </ListItem>
        <ListItem>
          <TextField
            key="description"
            disabled={true}
            value={todo.description}
            multiLine={true}
            floatingLabelText="자세히"/>
        </ListItem>
        <ListItem>
          <TextField
            key="created_at"
            value={todo.created_at}
            multiLine={true}
            disabled={true}
            floatingLabelText="작성시간"/>
        </ListItem>
        <ListItem primaryText="했나?" rightIcon={
          <Checkbox onCheck={(e) => this.onCheck(e, todo.id)}
                    defaultChecked={todo.checked}/>
        }/>
      </List>
    )
  }
}
