import React from 'react';
import _ from 'lodash';
import {
  Dialog,
  FlatButton,
  RaisedButton,
  TextField,
  IconButton
} from 'material-ui';

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
    this.props.handleClose();

  };

  submit() {
    this.handleClose();
    this.props.onSubmit({
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
        onClick={this.submit.bind(this)}
      />
    ];
    return (
      <Dialog
        title="Add Todo"
        actions={actions}
        open={this.props.open}
        onRequestClose={this.props.handleClose}>
        <TextField
          key="content"
          onChange={(e) => this.onChange(e, "content")}
          value={this.state.content}
          autoFocus
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
