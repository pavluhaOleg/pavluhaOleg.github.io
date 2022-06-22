import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CnpClose from "../../components/CnpClose/CnpClose";
import l from './Form.module.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = ({ login, setLogin, setFinishShoping, setBascet }) => {
   const [type, setType] = useState(true);

   const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: "onBlur" });

   const onSubmit = (data) => {
      setFinishShoping(true);
      reset();
      setBascet(false);
      setLogin(false);
      window.sessionStorage.clear();
      window.sessionStorage.setItem('Имя', data.Login);
   }


   const setNextType = () => {
      setType(!type)
   }
   return (
      <div className={login ? l.wrapper : l.none}
         onClick={() => setLogin(false)}
      >

         <CnpClose setLogin={setLogin} />


         <div className="wrapBlockForm">
            <h1 className={l.title}>Регистрация</h1>

            <form className={l.form} onClick={(e) => e.stopPropagation()}>
               <label className={l.label}>
                  Name
                  <input className={l.input} {...register('Login', {
                     required: "Поле обязательно для заполнения",

                     minLength: {
                        value: 3,
                        message: "Минимум 3 символов"
                     },
                     maxLength: {
                        value: 8,
                        message: "Максимум 8 символов"
                     },

                  })} />
               </label>


               <div style={{ height: '30px' }}>
                  {errors?.Login && <p className={l.p}>{errors?.Login?.message}</p>}
               </div>

               <label className={l.label}>
                  Password
                  <div className={l.positionInput}>
                     <input type={type ? 'password' : 'text'} className={l.input} {...register('Password', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                           value: 5,
                           message: "Минимум 5 символов"
                        },
                        maxLength: {
                           value: 10,
                           message: "Максимум 10 символов"
                        }

                     })} />

                     <div onClick={setNextType}
                        className={l.cnpAse}>
                        <span>
                           {type ? < BsFillEyeSlashFill /> : <BsFillEyeFill />}
                        </span>

                     </div>
                  </div>
               </label>

               <div style={{ height: '30px' }}>
                  {errors?.Password && <p className={l.p}>{errors?.Password?.message}</p>}
               </div>
               <button
                  onClick={handleSubmit(onSubmit)}
                  className={l.inputSubmit}>войти</button>
            </form>
         </div>
      </div>
   );
}

export default Login
