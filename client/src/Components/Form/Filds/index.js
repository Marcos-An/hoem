import React from 'react';

export const TipoField = props => {
  return (
    <label>
      <h4> Tipo </h4>
      <select
        className="Filds"
        type="text"
        value={props.imoveis.Tipo}
        onChange={props.Tipo}
      >
        <option selected hidden>
          Selecione o Tipo:
        </option>
        <option value="Casa">Casa</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Sala Comercial">Sala Comercial</option>
      </select>
    </label>
  );
};

export const CidadeField = props => {
  return (
    <label>
      <h4> Cidade </h4>
      <select
        className="Filds"
        type="text"
        value={props.imoveis.Cidade}
        onChange={props.Cidade}
      >
        <option selected hidden>
          Selecione a Cidade :
        </option>
        <option value="Dourados-MS">Dourados-MS</option>
        <option value="Nova Andradina-MS">Nova Andradina-MS</option>
        <option value="Caarapó-MS">Caarapó-MS</option>
      </select>
    </label>
  );
};

export const FinalidadeField = props => {
  return (
    <label>
      <h4> Finalidade </h4>
      <select
        className="Filds"
        type="text"
        value={props.imoveis.Finalidade}
        onChange={props.Finalidade}
      >
        <option selected hidden>
          Selecione a Finalidade:
        </option>
        <option value="Venda">Venda</option>
        <option value="Aluguel">Aluguel</option>
      </select>
    </label>
  );
};

export const ComodosField = props => {
  return (
    <label>
      <h4> Comodos </h4>
      <select
        className="Filds"
        type="number"
        value={props.imoveis.Comodos}
        onChange={props.Comodos}
      >
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
  );
};

export const BanheiroField = props => {
  return (
    <label>
      <h4> Banheiro </h4>
      <select
        className="Filds"
        type="text"
        value={props.imoveis.Banheiro}
        onChange={props.Banheiro}
      >
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
  );
};

export const GaragemField = props => {
  return (
    <label>
      <h4> Garagem </h4>
      <select
        className="Filds"
        type="text"
        value={props.imoveis.Garagem}
        onChange={props.Garagem}
      >
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
  );
};

export const PrecoField = props => {
  return (
    <>
      {props.imoveis.Finalidade === '' ? (
        <div>
          <h4 style={{ color: '#6923e7' }}>Preco</h4>
          <h4 style={{ fontWeight: 500 }}>Aguardando Finalidade</h4>
        </div>
      ) : props.imoveis.Finalidade === 'Venda' ? (
        <label>
          <h4 style={{ color: '#6923e7' }}> Preço </h4>
          <select
            style={{ borderColor: '#6923e7', fontWeight: 600 }}
            className="Filds"
            type="text"
            value={props.imoveis.Preco}
            onChange={props.Preco}
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
            value={props.imoveis.Preco}
            onChange={props.Preco}
          >
            <option selected hidden>
              Preço(R$)
            </option>
            <option value={1}>R$500 - 600</option>
            <option value={2}>R$600- 800</option>
            <option value={3}>R$800 - 1.000</option>
            <option value={4}>R$1.000 - 3.000 </option>
            <option value="outro">R$1.000.000 +</option>
          </select>
        </label>
      )}
    </>
  );
};
