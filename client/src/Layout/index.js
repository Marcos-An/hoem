import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import { Boddy } from './Styles/boddy';
import { Main } from './Styles/main';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Boddy>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Boddy>
    );
  }
}
