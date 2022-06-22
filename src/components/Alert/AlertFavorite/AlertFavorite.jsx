import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import fav from "./AlertFavorite.module.css"

const AlertFavorite = ({ alertFavorte }) => {
  return (
    <div className={fav.container}>
      <div className={alertFavorte ? fav.block + ' ' + fav.top : fav.block}>Tовар добавлен в избранное<span><BsCheckLg /></span></div>

    </div>
  )
}

export default AlertFavorite