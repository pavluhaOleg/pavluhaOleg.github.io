import React from 'react';
import { Link } from 'react-router-dom';
import pagin from './CnpPagination.module.css';


const CnpPagination = ({ page, cnpActive, pagesArray }) => {

   return (
      <div className={pagin.wrappPagination}>
         <div className={pagin.wrappBlockPagination}>

            {pagesArray.map(cnp =>
               <Link to="/" onClick={() => cnpActive(cnp)}
                  className={page === cnp ? [pagin.active, pagin.cnpPagination].join(' ') : pagin.cnpPagination}
                  key={cnp}>{cnp}
               </Link>
            )}</div>
      </div>
   )
}

export default CnpPagination