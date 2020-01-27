import React from 'react';
import { Fild } from './Styles';
import { Button } from '../Buttons';

import { connect } from 'react-redux';

const Filds = ({ still }) => {
  return (
    <Fild>
      <label>
        <h4> Tipo </h4>
        <select className="Filds" type="text" value={still.Tipo}>
          <option selected hidden>
            Selecione o Tipo:
          </option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Sala Comercial">Sala Comercial</option>
        </select>
      </label>
      <label>
        <h4> Cidade </h4>
        <select className="Filds" type="text" value={still.Cidade}>
          <option selected hidden>
            Selecione a Cidade :
          </option>
          <option value="Dourados-MS">Dourados-MS</option>
          <option value="Nova Andradina-MS">Nova Andradina-MS</option>
          <option value="Caarapó-MS">Caarapó-MS</option>
        </select>
      </label>
      <label>
        <h4> Finalidade </h4>
        <select className="Filds" type="text" value={still.Finalidade}>
          <option selected hidden>
            Selecione a Finalidade:
          </option>
          <option value="Venda">Venda</option>
          <option value="Aluguel">Aluguel</option>
        </select>
      </label>
      <label>
        <h4> Comodos </h4>
        <select className="Filds" type="number" value={still.Comodos}>
          <option selected hidden>
            Comodos
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value="outro">mais</option>
        </select>
      </label>
      <label>
        <h4> Banheiro </h4>
        <select className="Filds" type="text" value={still.Banheiro}>
          <option selected hidden>
            Banheiro
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value="outro">mais</option>
        </select>
      </label>
      <label>
        <h4> Garagem </h4>
        <select className="Filds" type="text" value={still.Garagem}>
          <option selected hidden>
            Garagem
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value="outro">mais</option>
        </select>
      </label>
      {still.Finalidade === '' ? (
        <div>
          <h4 style={{ color: '#6923e7' }}>Preco</h4>
          <h4 style={{ fontWeight: 500 }}>Aguardando Finalidade</h4>
        </div>
      ) : still.Finalidade === 'Venda' ? (
        <label>
          <h4 style={{ color: '#6923e7' }}> Preço </h4>
          <select
            style={{ borderColor: '#6923e7', fontWeight: 600 }}
            className="Filds"
            type="text"
            value={still.Preco}
          >
            <option selected hidden>
              Preço (R$)
            </option>
            <option value={1}>R$100.000 - 250.000</option>
            <option value={2}>R$250.000- 500.000</option>
            <option value={3}>R$500.000 - 750.000</option>
            <option value={4}>R$750.000 - 1.000.000 </option>
            <option value="outro">R$1.000.000 +</option>
          </select>
        </label>
      ) : (
        <label>
          <h4 style={{ color: '#6923e7' }}> Preço </h4>
          <select
            style={{ borderColor: '#6923e7', fontWeight: 600 }}
            className="Filds"
            type="text"
            value={still.Preco}
          >
            <option selected hidden>
              Preço(R$)
            </option>
            <option value={1}>R$500 - 600</option>
            <option value={2}>R$600- 800</option>
            <option value={3}>R$800 - 1.000</option>
            <option value={4}>R$1.000 - </option>
            <option value="outro">R$1.000.000 +</option>
          </select>
        </label>
      )}
      <Button>Pesquisar</Button>
    </Fild>
  );
};

export default connect(state => ({ still: state }))(Filds);
