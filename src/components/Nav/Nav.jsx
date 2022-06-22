import React from 'react'
import s from './Nav.module.css';
import logo from '../../img/logo.png'
import Search from '../Search/Search';
import { MdAddShoppingCart } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Nav = ({ value, setValue, setBascet, setLogin, order, setFinishShoping, allPost, favorite, cnpNav }) => {


  const logoHideAll = () => {
    setBascet(false);
    setFinishShoping(false);
    setLogin(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const hideFinishShoping = () => {
    setFinishShoping(false)
    setLogin(false)
  }

  return (
    <div className={s.nav}>
      <Link to="/">
        <div
          onClick={logoHideAll}
          className={s.wrappLogoImg}>
          <img src={logo} title="На главную" />
        </div>
      </Link>

      <Link to="/" className={s.groupCnp}>
        {cnpNav.map((cnp, index) => (
          <div
            key={index}
            className={s.cnp}
            onClick={(e) => allPost(e)}
          >{cnp}</div>)
        )}

      </Link>

      <Search
        value={value}
        setValue={setValue}
      />


      <Link to="/favorite">
        <div
          onClick={hideFinishShoping}
          className={s.favorite}
          title="Избранное">
          <FaHeart />
        <div className={favorite.length ? s.numberFavirite : s.numberZero}>{favorite.length}</div>
        </div>

      </Link>

      <div className={s.card}></div>
      <div onClick={() => setBascet(true)} className={s.basket} title="Корзина товаров">
        <span className={s.icon}><MdAddShoppingCart /></span>
        <div className={order.length ? s.numberGoods : s.numberZero}>{order.length}</div>
      </div>
    </div>
  )
}

export default Nav