import c from './cnpClose.module.css';

const CnpClose = ({ setLogin }) => {

   const Login = () => {
      setLogin(false);
   }
   return (

      <div className={c.cnpClosed}
         onClick={() => { Login() }}>
         <span className={c.elemCnp1}></span>
         <span className={c.elemCnp2}></span>
      </div>
   )

}


export default CnpClose;