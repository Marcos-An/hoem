import { createStore } from 'redux';

const INITIAL_STATE = {
  Tipo: false,
  Cidade: false,
  Finalidade: false,
  Comodos: false,
  Banheiro: false,
  Garagem: false,
  Preco: false,
  open: false,
  currentPage: 1,
  selected: 1,
  postsPerPage: 9,
  imoveis: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TIPO':
      return { ...state, Tipo: action.value };
    case 'CIDADE':
      return { ...state, Cidade: action.value };
    case 'FINALIDADE':
      return { ...state, Finalidade: action.value };
    case 'COMODOS':
      return { ...state, Comodos: action.value };
    case 'BANHEIRO':
      return { ...state, Banheiro: action.value };
    case 'GARAGEM':
      return { ...state, Garagem: action.value };
    case 'PRECO':
      return { ...state, Preco: action.value };
    case 'IMOVEIS':
      return { ...state, imoveis: action.value };
    case 'CURRENT-PAGE':
      return { ...state, currentPage: action.value };
    case 'SELECTED':
      return { ...state, selected: action.value };
    case 'OPEN':
      return { ...state, open: action.value };
    default:
      break;
  }
  return state;
}
const store = createStore(reducer);

export default store;
