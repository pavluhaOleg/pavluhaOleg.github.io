import React from 'react';
import s from './GoodsList.module.css';

import Loading from '../../components/Loading/Loading';
import ShowBooks from '../../components/ShowBooks/ShowBooks';

const GoodsList = (props) => {
    const { addFavorite, setArrBrowser, addYouBrowser, filterProducts, addToOrder, alert, setAlert, isLoading, setAlertFavorite, alertFavorite } = props;

    return (
        <div className={s.containerFlex}>

            {isLoading ? (
                <div className={s.loading}><Loading /></div>
            )
                :
                (<ShowBooks setArrBrowser={setArrBrowser}
                    filterProducts={filterProducts}
                    addToOrder={addToOrder}
                    alert={alert}
                    setAlert={setAlert}
                    addYouBrowser={addYouBrowser}
                    addFavorite={addFavorite}
                    setAlertFavorite={setAlertFavorite}
                    alertFavorte={alertFavorite}
                />)

            }
        </div>
    );
};

export default GoodsList;