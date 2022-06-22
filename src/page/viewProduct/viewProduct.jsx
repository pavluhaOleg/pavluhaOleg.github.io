import React, { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../../components/Alert/AlertShoping/Alert";
import prod from './viewProduct.module.css';
import axios from 'axios';

const ViewProduct = ({ setAlert, addToOrder, alert, product, setProduct }) => {
   const { id } = useParams();

   useEffect(() => {
      IdElem(id)
   }, [id]);

   const IdElem = (id) => {
      axios.get(`http://localhost:3001/goods/${id}`)
      .then((response) => {
         setProduct(response.data)
      })
      
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }

   const discountPrice = () => {
      if ((sessionStorage.getItem('Имя') !== null)) {
         return product.price - product.price / 100 * 30
      }
      return product.price
   }


   const Shoping = () => {

      const Working = () => {
         setAlert(true);
         if (!alert) {
            setTimeout(function () {
               setAlert(false)
            }, 1500)
         }
      }

      addToOrder({
         id: product.id,
         name: product.name,
         price: discountPrice(),
         poster: product.poster,
      })
      Working();
   }

   return (
      <div className={prod.container}>
         {product && (
            <div>
               <h1 className={prod.title}>{product.name}</h1>
               <div className={prod.narration}>
                  <h2>Повествование</h2>
                  <p></p>
               </div>
               <div className={prod.blockImg}>
                  <img className={prod.img} src={product.poster} title="книга" />
               </div>

               {(sessionStorage.getItem('Имя') !== null) ? (
                  <h3 className={prod.price}>Акционная цена <span className={prod.color}>{Math.round(product.price - product.price / 100 * 30)}</span> <span className={prod.ru}>грн</span></h3>)

                  :

                  (<h3 className={prod.price}>Цена <span className={prod.color}>{product.price}</span> <span className={prod.ru}>грн</span></h3>)}


               <button className={prod.addBasket} onClick={Shoping}>Добавить в корзину</button>

               <Link to="/"><button className={prod.backShop}>Вернуться в магазин</button></Link>
            </div>
         )

         }

         <Alert alert={alert} />
      </div>
   );
}

export default ViewProduct