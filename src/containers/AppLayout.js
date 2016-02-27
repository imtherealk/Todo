import React from 'react';
import { Container } from 'flux/utils';

import TodoStore from '../stores/TodoStore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main';
import Modal from '../components/Modal';
import {addTodo} from '../actions/TodoActionCreators';


class AppLayout extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    if (prevState == null) {
      prevState = {
        modalOpen: false
      };
    }
    let state = TodoStore.getState();
    return _.assign({}, prevState, {
      // Some new states here
    });
  }

  handleClose() {
    this.setState(_.assign({}, this.state, {modalOpen: false}));
  }

  handleOpen() {
    this.setState(_.assign({}, this.state, {modalOpen: true}));
  };

  handleModalSubmit(form) {
    addTodo(form);
  }

  render() {
    return (
      <div>
        <Header onModalAddClick={this.handleOpen.bind(this)}/>
        <div style={{paddingTop: 64}}>
          {this.props.children || <Main/>}
        </div>
        <Footer/>

        <Modal open={this.state.modalOpen}
               onSubmit={this.handleModalSubmit.bind(this)}
               handleClose={this.handleClose.bind(this)}/>
      </div>
    );
  }
}

export default Container.create(AppLayout)
