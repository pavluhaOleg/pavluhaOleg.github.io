import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

import s from './GoodsItem.module.css';


const GoodsItem = (props) => {
    const { addFavorite, addYouBrowser, name, addToOrder, poster, alert, setAlert, setAlertFavorite, alertFavorite, price, id } = props;

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
            id: props.id,
            name: props.name,
            price: discountPrice(),
            poster: props.poster,
        })
        Working();
    }

    const addWatch = () => {
        addYouBrowser({
            id: props.id,
            name: props.name,
            poster: props.poster,
            price: props.price
        })
    }

    const addFavor = () => {
        addFavorite({
            id: props.id,
            name: props.name,
            poster: props.poster,
            price: props.price
        })

        const AlertFavorite = () => {
            setAlertFavorite(true);
            if (!alertFavorite) {
                setTimeout(function () {
                    setAlertFavorite(false)
                }, 1500)
            }
        }
        AlertFavorite()
    }

    const discountPrice = () => {
        if ((sessionStorage.getItem('Имя') !== null)) {
            return Math.round(price - price / 100 * 30)
        }
        return price
    }

    return (

        <div className={s.card}>
            <Link to={`/viewProduct/${id}`}>
                <div onClick={addWatch}>
                    <div className={s.blockImg}>
                        <img
                            src={poster}
                            alt={name}
                        />
                    </div>

                    <div className={s.cardBody}>
                        <h3 className={s.title}>{name}</h3>
                        <p className={s.text}>Цена: {discountPrice()} грн.</p>
                    </div>
                </div>
            </Link>

            <div className={s.favorite}
                onClick={() => addFavor(id)}
                title="Избранное"><FaHeart />
            </div>

            <button
                className={s.button}
                onClick={Shoping}
            >
                Купить
            </button>

        </div>

    );
};

export default GoodsItem;
