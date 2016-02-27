import React from 'react';
import {Link} from 'react-router';

import {
  AppBar,
  RaisedButton,
  IconButton,
  FlatButton,
  LeftNav,
  MenuItem
} from 'material-ui';
import {
  NavigationClose,
  ContentAddCircleOutline as AddCircleOutline,
  NavigationMenu
} from 'material-ui/lib/svg-icons';
import Colors from 'material-ui/lib/styles/colors';

import Modal from './Modal';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      navOpen: false
    }
  }

  onChange({target: {value}}, name) {
    this.setState(_.assign({}, this.state, {
      [name]: value
    }));
  }

  handleOpen() {
    this.setState(_.assign({}, this.state, {modalOpen: true}));
  };

  handleClose() {
    this.setState(_.assign({}, this.state, {modalOpen: false}));
  };

  handleToggle() {
    this.setState(_.assign({}, this.state, {navOpen: !this.state.navOpen}));
  }

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
          color={Colors.white}/>
      </IconButton>
    );
    let leftNavButton = (
      <IconButton onClick={this.handleToggle.bind(this)}>
        <NavigationMenu/>
      </IconButton>
    )
    return (
      <span>
        <AppBar style={{position: "fixed"}}
                title={title}
                iconElementRight={modalAddButton}
                iconElementLeft={leftNavButton}>
        </AppBar>
        <Modal open={this.state.modalOpen}
               handleClose={this.handleClose.bind(this)}/>
        <LeftNav
          docked={false}
          width={200}
          open={this.state.navOpen}
          onRequestChange={open => this.setState(_.assign({}, this.state, {navOpen: open}))}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>About</MenuItem>
        </LeftNav>
      </span>
    );
  }
}

