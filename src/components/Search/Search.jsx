import React from 'react';

import s from './Search.module.css'

const Search = ({ setValue, value }) => {

  return (
    <div>
      <input type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Поиск...'
      />
    </div>
  )
};

export default Search;