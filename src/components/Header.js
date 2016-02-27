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
      navOpen: false
    }
  }

  onChange({target: {value}}, name) {
    this.setState(_.assign({}, this.state, {
      [name]: value
    }));
  }

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
      <IconButton onClick={this.props.onModalAddClick}>
        <AddCircleOutline
          color={Colors.white}/>
      </IconButton>
    );
    let leftNavButton = (
      <IconButton onClick={this.handleToggle.bind(this)}>
        <NavigationMenu/>
      </IconButton>
    );
    return (
      <span>
        <AppBar style={{position: "fixed"}}
                title={title}
                iconElementRight={modalAddButton}
                iconElementLeft={leftNavButton}>
        </AppBar>
        <LeftNav
          docked={false}
          width={200}
          open={this.state.navOpen}
          onRequestChange={open => this.setState(_.assign({}, this.state, {navOpen: open}))}>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
        </LeftNav>
      </span>
    );
  }
}

