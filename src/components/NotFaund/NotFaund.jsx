import React from 'react';
import notF from './NotFaund.module.css'

const NotFaund = () => {
  return (
    <div className={notF.wrapper}>
        <div className={notF.container}>Такой книги нет.</div>
    </div>
  )
}

export default NotFaund