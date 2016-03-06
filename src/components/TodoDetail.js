import React from 'react';
import {
  List,
  ListItem,
  TextField,
  Checkbox,
  CircularProgress
} from 'material-ui';
import {STATUS} from '../actions/todoDetail';

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
  renderOne() {
    let {todo} = this.props;
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
          <Checkbox onCheck={this.props.onCheckTodo}
                    defaultChecked={todo.checked}/>
        }/>
      </List>
    );
  }
  render() {
    let {status} = this.props;
    let statusMap = {
      [STATUS.NOTHING]: this.renderNothing.bind(this),
      [STATUS.LOADING]: this.renderLoading.bind(this),
      [STATUS.ONE]: this.renderOne.bind(this)
    };
    return statusMap[status]();
  }
}
