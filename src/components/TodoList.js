import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';

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

