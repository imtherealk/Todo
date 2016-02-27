import React from 'react';
import { Container } from 'flux/utils';

import TodoStore from '../stores/TodoStore';

class About extends React.Component {
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
        Hello!
      </div>
    );
  }
}

export default Container.create(About);
