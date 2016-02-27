import React from 'react';
import { Container } from 'flux/utils';

import TodoDetailStore from '../stores/TodoDetailStore';
import TodoDetail from '../components/TodoDetail';

class Detail extends React.Component {
  static getStores() {
    return [TodoDetailStore];
  }

  static calculateState(prevState) {
    let state = TodoDetailStore.getState();
    console.log(state);
    return {
      todo: state.item,
      status: state.status
    };
  }
  render() {
    let {params} = this.props;
    return <TodoDetail id={params.id} {...this.state}/>;
  }
}

export default Container.create(Detail);
