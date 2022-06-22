import React from 'react'
import { Link } from 'react-router-dom';
import f from './FinishShoping.module.css';


const FinishShoping = ({ finish, order, setLogin, setFinishShoping, setOrder }) => {

  const goOut = () => {
    sessionStorage.clear();
    setFinishShoping(false);
    setOrder([]);
    setLogin(false);
  }

  const goShoping = () => {
    setFinishShoping(false);
    setOrder([]);
    setLogin(false);
  }

  let word = '';

  if (order.length === 1) {
    word = 'книгу'
  }
  else {
    word = 'книги'
  }

  return (
    <div className={finish ? f.wrapper : f.none}>

      <div className={f.container}>
        <h1 className={f.h1}>Вы успешно заказали {word}</h1>
        <hr className={f.hr} />

        <ul className={f.ul}>
          {order.map(elem => (
            <li key={elem.id} className={f.li}>
              {elem.name} - {elem.quantity}шт.
            </li>
          ))}
        </ul>

        <p className={f.text}>Перейдите в магазин. Все книги для Вас со скидкой 30%</p>

        <div className={f.flex}>
          <Link to="/">
            <button
              onClick={goShoping}
              className={f.goShoping}
            >В магазин</button>
          </Link>

          <Link to="/">
            <button
              className={f.goOut}
              onClick={goOut}
            >Выйти</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FinishShoping