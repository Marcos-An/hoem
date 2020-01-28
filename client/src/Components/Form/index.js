import React from 'react';
import Filds from './filds';
import { Form } from './styled';
import { Provider } from 'react-redux';
import store from '../../store';

const FormFilds = () => {
  return (
    <Provider store={store}>
      <Form>
        <Filds />
      </Form>
    </Provider>
  );
};

export default FormFilds;
