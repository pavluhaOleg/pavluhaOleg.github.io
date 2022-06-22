import React, { useState } from "react";
import a from './Alert.module.css';
import { BsCheckLg } from "react-icons/bs";

const Alert = ({ alert }) => {

   return (
      <div className={a.container}>
         <div className={alert ? a.block + ' ' + a.top : a.block}>Tовар добавлен в корзину <span><BsCheckLg /></span></div>

      </div>
   )

}
export default Alert;

