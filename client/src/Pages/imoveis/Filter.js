import React from 'react';
import { Filter } from './styled';
import Form from '../../Components/Form';

function FilterForm() {
  return (
    <Filter>
      <Form filtrar={true} />
    </Filter>
  );
}

export default FilterForm;
