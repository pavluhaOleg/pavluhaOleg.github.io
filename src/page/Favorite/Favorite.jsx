import React from 'react'
import { useNavigate } from 'react-router-dom'
import fav from './Favorite.module.css'
import ItemFavorite from './ItemFavotite/ItemFavorite'

const Favorite = ({ favorite, setFavorite, addYouBrowser, removeElemFavorite }) => {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const deleteFavAll = () => {
    setFavorite([])
  }


  return (
    <div className={fav.wrapper}>
      <div className={fav.wrappWindowFavorite}>
        {favorite.length !== 0 ?
          favorite.map(item =>
            <ItemFavorite key={item.price} {...item} addYouBrowser={addYouBrowser} removeElemFavorite={removeElemFavorite} />
          )
          :
          <div className={fav.empty}>
            <h1>Ничего нет...</h1>
          </div>
        }
      </div>
      <div className={fav.flex}>
        <div
          onClick={deleteFavAll}
          className={fav.cnp}>Очистить</div>

        <div
          onClick={() => navigate(-1)}
          className={fav.cnpOff}>Выйти</div>
      </div>

    </div>
  )
}

export default Favorite