import React from 'react';
import brous from './youBrowsed.module.css';
import YouBrowsedItem from './youBrowsedItem/youBrowsedItem';

const YouBrowsed = ({ arrBrowser }) => {

  return (

    <div>{arrBrowser.length !== 0 ?
      <>
        <h2 className={brous.title}>Ранее Вы просматривали</h2>

        <div className={brous.wrapper}>{
          arrBrowser.map(item =>
            <YouBrowsedItem key={item.price} {...item} />
          )
        }
        </div>
      </>
      : ''
    }</div>
  )
}

export default YouBrowsed