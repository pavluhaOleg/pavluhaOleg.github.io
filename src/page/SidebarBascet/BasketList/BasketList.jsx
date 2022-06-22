import BasketItem from '../../../components/BasketItem/BasketItem';
import s from './BasketList.module.css';


const BasketList = (props) => {
    const { order, removeFromOrder, setLogin, setBascet, setFinishShoping } = props;

    const conditionLogin = () => {
        if (sessionStorage.getItem('Имя') !== null) {
            setLogin(false);
            setFinishShoping(true);
        }
        setLogin(true);
    }

    const cnpCost = () => {
        setBascet(false);
        conditionLogin();
    }

    if (!order.length) {
        return (
            <ul>
                <li className={s.goodsNow}>Товаров нет</li>
            </ul>
        );
    }

    return (
        <ul className={s.listItem}>

            <li className={s.result}>

                <div>
                    <span className={s.text}>Общая стоимость :</span>{' '}
                    {order.reduce((acc, item) => {
                        return acc + item.price * item.quantity;
                    }, 0)}{' '}
                    грн.
                </div>

                <button onClick={cnpCost} className={s.costBtn}>Перейти к оплате</button>

            </li>

            {order.map((item, index) => (
                <BasketItem key={index} removeFromOrder={removeFromOrder} {...item} />
            ))}

        </ul>
    );
};

export default BasketList;