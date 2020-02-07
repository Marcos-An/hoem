import React, { useEffect, useState } from 'react';
import {
  Body,
  CardBox,
  BoddyCard,
  Title,
  Divider,
  Texts,
  Search
} from './styled';
import { FilterIcon } from './icon';
import Cards from '../../Components/Cards';
import Pagination from '../../Components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
const API_URL = '/api/imoveis';

function Imoveis() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentImoveis, setCurrent] = useState();
  const indexOfFirstPost = data.currentPage * data.postsPerPage;
  const indexOfLastPost = indexOfFirstPost - data.postsPerPage;

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(result => result.json())
      .then(result => dispatch({ type: 'IMOVEIS', value: result }))
      .catch(() => console.log('Error'));
  }, []);

  const sliced = () => data.imoveis.slice(indexOfLastPost, indexOfFirstPost);
  const set = () => {
    let imov = sliced();
    setCurrent(imov);
  };

  const paginate = pageNumber => {
    dispatch({ type: 'CURRENT-PAGE', value: pageNumber });
    dispatch({ type: 'SELECTED', value: pageNumber });
  };

  function close() {
    dispatch({ type: 'OPEN', value: !data.open });
  }

  setTimeout(function() {
    set();
  }, 100);

  return (
    <Body>
      <Texts>
        <Title>Imoveis</Title>
        <Search onClick={() => close()}>
          <FilterIcon />
          Filtrar
        </Search>
      </Texts>
      <Divider />
      {data.open ? <Filter /> : null}
      <BoddyCard>
        <CardBox>
          {currentImoveis
            ? currentImoveis.map((item, index) => (
                <Cards key={index} imovel={item} index={index} />
              ))
            : null}
        </CardBox>
      </BoddyCard>
      <Pagination
        postsPerPage={data.postsPerPage}
        totalPosts={data.imoveis.length}
        paginate={paginate}
        selected={data.selected}
      />
    </Body>
  );
}

export default Imoveis;
