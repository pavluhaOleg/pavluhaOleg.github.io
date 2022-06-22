import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import item from './youBrowsedItem.module.css'


const YouBrowsedItem = ({ name, poster, id }) => {


  return (
    <Link to={`/viewProduct/${id}`}>
      <div className={item.card}>
        <div className={item.boxImg}>
          <img src={poster} title="фото" />
        </div>
        <h5 className={item.title}>{name}</h5>
      </div>
    </Link>
  )
}

export default YouBrowsedItem