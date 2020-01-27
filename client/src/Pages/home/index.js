import React from 'react';
import Slider from '../../Components/Slider';
import Search from './search';

import { Provider } from 'react-redux';
import store from '../../store';

export default function Home() {
  return (
    <Provider store={store}>
      <Slider />
      <Search />
    </Provider>
  );
}
