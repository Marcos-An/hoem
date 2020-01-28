import { createStore } from 'redux';

const INITIAL_STATE = {
  still: [
    {
      Tipo: '',
      Cidade: '',
      Finalidade: '',
      Comodos: 0,
      Banheiro: 0,
      Garagem: 0,
      Preco: 0
    }
  ]
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TIPO':
      console.log(action.value);

      return { ...state, Tipo: action.value };
    case 'CIDADE':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    case 'FINALIDADE':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    case 'COMODOS':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    case 'BANHEIRO':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    case 'GARAGEM':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    case 'PRECO':
      console.log(action.value);
      return { ...state, Tipo: action.value };
    default:
      break;
  }
  return state;
}
const store = createStore(reducer);

export default store;
