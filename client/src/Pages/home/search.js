import React from 'react';
import { Boddy, Search, Box, Title } from './Styles/search';
import Form from '../../Components/Form';

const SearchForm = () => {
  return (
    <Boddy>
      <Search>
        <Box>
          <Title>Econtre seu lar</Title>
          <Form />
        </Box>
      </Search>
    </Boddy>
  );
};

export default SearchForm;
