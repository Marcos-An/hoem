import React from 'react';
import { Title, UpperTitle } from './styled';
import {
  Body,
  Categorias,
  Categoria,
  CategoriaLateral,
  Laterais,
  TitleCatergoria,
  Qty
} from './styledCategories';

const imgs = [
  'https://www.clubelatino.com.br/wp-content/uploads/2018/08/sao-paulo.jpg',
  'https://dob5zu6vfhpfk.cloudfront.net/images/2015/03/31153652/bWuREk.jpg',
  'http://demo2.themelexus.com/housey/wp-content/uploads/2019/08/h1-banner_02.jpg',
  'https://images.unsplash.com/photo-1569152811536-fb47aced8409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
];

function Categories(props) {
  const categ = props.categ;
  return (
    <Body>
      <UpperTitle>categorias das propriedades</UpperTitle>
      <Title>EXPLORE POR CATEGORIA</Title>
      <Categorias>
        <Categoria img={imgs[0]}>
          <TitleCatergoria>Rio de Janeiro</TitleCatergoria>
          <Qty>{`${categ.Rio} imoveis`}</Qty>
        </Categoria>
        <Categoria img={imgs[1]}>
          <TitleCatergoria>São Paulo</TitleCatergoria>
          <Qty>{`${categ.SãoPaulo} imoveis`}</Qty>
        </Categoria>
        <Laterais>
          <CategoriaLateral img={imgs[2]}>
            <TitleCatergoria>Venda</TitleCatergoria>
            <Qty>{`${categ.Venda} imoveis`}</Qty>
          </CategoriaLateral>
          <CategoriaLateral img={imgs[3]}>
            <TitleCatergoria>Aluguel</TitleCatergoria>
            <Qty>{`${categ.Aluguel} imoveis`}</Qty>
          </CategoriaLateral>
        </Laterais>
      </Categorias>
    </Body>
  );
}

export default Categories;
