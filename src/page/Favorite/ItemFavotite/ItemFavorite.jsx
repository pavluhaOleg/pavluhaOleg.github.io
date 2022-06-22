import React from 'react'
import { Link } from 'react-router-dom'
import cardF from './ItemFavorite.module.css'
import { BsXOctagon } from "react-icons/bs";

const ItemFavorite = ({ addYouBrowser, name, poster, id, removeElemFavorite }) => {

   const addBrowsed = () => {
      addYouBrowser({
         id,
         name,
         poster,
      })
   }
  
   return (

      <div className={cardF.card}>

         <div className={cardF.delete}
            onClick={(e) => removeElemFavorite(id)}
         ><BsXOctagon /></div>

         <Link to={`/viewProduct/${id}`}>
            <div className={cardF.blockImg}
               onClick={addBrowsed}
            >
               <img src={poster} title="Изображение" />
            </div>
         </Link>
         <h4>{name}</h4>
      </div>

   )
}

export default ItemFavorite
