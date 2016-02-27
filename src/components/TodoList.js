import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  List, ListItem, Checkbox
} from 'material-ui';

import {checkTodo} from '../actions/TodoActionCreators';


export default class extends React.Component {
  onCheck(event, id) {
    checkTodo(id);
  }

  onClick(event, id) {

  }

  render() {
    let todos = this.props.todos;
    return (
      <List>
        {todos.map((todo, idx) => (
          <ListItem
            href={`#/todos/${todo.id}`}
            key={idx}
            primaryText={todo.content}
            secondaryText={todo.created_at}
            rightIcon={
            <Checkbox
              onCheck={(e) => this.onCheck(e, todo.id)}
              defaultChecked={todo.checked}/>}
            onClick={(e) => this.onClick(e, todo.id)}>
          </ListItem>
        ))}
      </List>
    )
  }
}

