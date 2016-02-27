import React from 'react';
import { Container } from 'flux/utils';

import TodoStore from '../stores/TodoStore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main';


export class AppLayout extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    let state = TodoStore.getState();
    return {};
  }

  render() {
    return (
      <div>
        <Header/>
        <div style={{paddingTop: 64}}>
          {this.props.children || <Main/>}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Container.create(AppLayout)
