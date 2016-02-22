import React from 'react';
import {Navbar, Input, Nav, NavItem, Button} from 'react-bootstrap';
import {Link} from 'react-router';

import {
  AppBar,
  RaisedButton,
  IconButton,
  FlatButton
} from 'material-ui';
import {
  NavigationClose,
  ContentAddCircleOutline as AddCircleOutline
} from 'material-ui/lib/svg-icons'
import Colors from 'material-ui/lib/styles/colors';

import Modal from './Modal'

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    }
  }

  handleOpen() {
    this.setState({modalOpen: true});
  };

  handleClose() {
    this.setState({modalOpen: false});
  };

  render() {
    let title = (
      <span style={{textDecoration:'none'}}>
        Todo
      </span>
    );
    let modalAddButton = (
      <IconButton
        onClick={this.handleOpen.bind(this)}>
        <AddCircleOutline
          color= {Colors.white}/>
      </IconButton>
    );
    return (
      <span>
        <AppBar style={{position: "fixed"}}
                title={title}
                iconElementRight={modalAddButton}/>
        <Modal open={this.state.modalOpen}
               handleClose={this.handleClose.bind(this)}/>
      </span>
    );
  }
}

