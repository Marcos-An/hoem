import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import { Boddy } from './Styles/boddy';
import { Main } from './Styles/main';
import { Provider } from 'react-redux';
import store from '../store';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <Boddy>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Boddy>
      </Provider>
    );
  }
}
