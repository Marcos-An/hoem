import React, { useState, useEffect } from 'react';
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
import { Provider } from 'react-redux';
import store from '../../store';
import Filter from './Filter';
const API_URL = '/api/imoveis';

function Imoveis() {
  const [imoveis, setImoveis] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then(result => result.json())
      .then(result => setImoveis(result))
      .catch(() => console.log('Error'));
  }, [imoveis]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentImoveis = imoveis.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setSelected(pageNumber);
  };
  return (
    <Provider store={store}>
      <Body>
        <Texts onClick={() => setOpen(!open)}>
          <Title>Imoveis</Title>
          <Search>
            <FilterIcon />
            Filtrar
          </Search>
        </Texts>
        <Divider />
        {open ? <Filter /> : null}
        <BoddyCard>
          <CardBox>
            {currentImoveis.map((item, index) => (
              <Cards key={index} imovel={item} index={index} />
            ))}
          </CardBox>
        </BoddyCard>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={imoveis.length}
          paginate={paginate}
          selected={selected}
        />
      </Body>
    </Provider>
  );
}

export default Imoveis;
