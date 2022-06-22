import React from 'react';
import BasketList from './BasketList/BasketList';
import s from './SidebarBascet.module.css'

const SidebarBascet = ({ order, removeFromOrder, basket, setBascet, setLogin, setFinishShoping }) => {

  return (
    <div className={basket ? s.modalSidebar : ''}
      onClick={() => setBascet(false)}
    >
      <div
        className={basket ? `${s.wrapperSidebar}` : `${s.wrapperSidebar} ${s.sidebar}`}
        onClick={(e) => e.stopPropagation()}

      >

        <div
          className={s.cnpClosed}
          onClick={() => setBascet(false)}
        >
          <span className={s.elemCnp1}></span>
          <span className={s.elemCnp2}></span>
        </div>

        <div
          className={s.activeSidebar}
        >
          <div className={s.paddingSidebar}></div>


          <div className={s.titleBascet}>
          </div>
          <BasketList order={order}
            removeFromOrder={removeFromOrder}
            setBascet={setBascet}
            setLogin={setLogin}
            setFinishShoping={setFinishShoping} />
        </div>
      </div>
    </div>
  )
}

export default SidebarBascet