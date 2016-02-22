import React from 'react';
import _ from 'lodash';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';

import {addTodo, loadTodo, setLoadingTrue, setLoadingFalse} from '../actions/TodoActionCreators';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      description: ''
    }
  }

  handleClose() {
    this.setState({
      content: '',
      description: ''
    });

  };

  save(e) {
    this.props.handleClose(e);
    addTodo({
      content: this.state.content,
      description: this.state.description
    });
  }

  onChange({target: {value}}, name) {
    this.setState(_.assign({}, this.state, {
      [name]: value
    }));
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={(e) => this.save(e)}
      />
    ];
    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        open={this.props.open}
        onRequestClose={this.props.handleClose}>
        <TextField
          key="content"
          onChange={(e) => this.onChange(e, "content")}
          value={this.state.content}
          hintText="할 일"/>
        <br/>
        <TextField
          key="description"
          onChange={(e) => this.onChange(e, "description")}
          value={this.state.description}
          hintText="자세히"
          multiLine={true}/>
      </Dialog>
    );
  }
}
