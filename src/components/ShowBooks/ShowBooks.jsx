import React from 'react'
import GoodsItem from '../GoodsItem/GoodsItem';
import NotFaund from '../NotFaund/NotFaund';
import showBooks from './ShowBooks.module.css'

const ShowBooks = ({ addFavorite, setArrBrowser, addYouBrowser, setAlert, addToOrder, alert, setAlertFavorite, filterProducts, alertFavorite }) => {
  return (
    <div className={showBooks.containerFlex}>{
      filterProducts.length !== 0 ?
        filterProducts.map((item) => (
          <GoodsItem key={item.id}
            setArrBrowser={setArrBrowser}
            addFavorite={addFavorite}
            addYouBrowser={addYouBrowser}
            addToOrder={addToOrder}
            setAlert={setAlert}
            alert={alert}
            setAlertFavorite={setAlertFavorite}
            alertFavorte={alertFavorite}
            {...item} />
        ))
        :
        <NotFaund />
    }
    </div>
  )
}

export default ShowBooks