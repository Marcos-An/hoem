import React from 'react';
import Filds from './filds';
import { Form } from './styled';
import { Provider } from 'react-redux';
import store from '../../store';

const FormFilds = props => {
  return (
    <Provider store={store}>
      <Form>
        <Filds filtrar={props.filtrar} />
      </Form>
    </Provider>
  );
};

export default FormFilds;
