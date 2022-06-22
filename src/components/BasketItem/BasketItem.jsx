import s from './BasketItem.module.css';

const BasketItem = ({ name, price, quantity, id, poster, removeFromOrder }) => {
    return (
        <li className={s.card}>

            <div className={s.blockText}>
                <h3>{name}</h3>
                <h4 className={s.price}>{price}руб x {quantity}шт.</h4>
                <button
                    className={s.delete}
                    onClick={() => removeFromOrder(id)}
                >
                    Удалить
                </button>
            </div>
            <div className={s.boxImg}>
                <img src={poster} title="Ваш товар" />
            </div>
        </li>
    );
};

export default BasketItem;