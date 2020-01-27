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
//function search(state = INITIAL_STATE, action) {
//switch(action.type){
//case 'SEARCH_STILL':
//return {...state, still: [...state.still, action.title]}
//default:
//return state
//}
//}
function search() {
  return {
    Tipo: '',
    Cidade: '',
    Finalidade: '',
    Comodos: 0,
    Banheiro: 0,
    Garagem: 0,
    Preco: 0
  };
}
const store = createStore(search);

export default store;
