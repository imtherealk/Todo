import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  List, ListItem, Checkbox
} from 'material-ui';


export default class extends React.Component {
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
                onCheck={(e) => this.props.onCheckTodo(todo)}
                defaultChecked={todo.checked}/>
            }/>
        ))}
      </List>
    )
  }
}

