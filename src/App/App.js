import s from './App.module.css'
import { useEffect, useMemo, useState } from 'react';

import GoodsList from '../page/GoodsList/GoodsList';
import Nav from '../components/Nav/Nav';
import SidebarBascet from '../page/SidebarBascet/SidebarBascet';
import Login from '../page/Login/Login';
import { Routes, Route } from 'react-router-dom';
import FinishShoping from '../page/FinishShoping/FinishShoping';
import Alert from '../components/Alert/AlertShoping/Alert';
import Footer from '../components/Footer/Footer';
import YouBrowsed from '../components/youBrowsed/youBrowsed';
import ViewProduct from '../page/viewProduct/viewProduct';
import PostSevise from '../API/postSevise';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArr } from '../utils/pages'
import CnpPagination from '../components/cnpPagination/CnpPagination';
import Favorite from '../page/Favorite/Favorite';
import AlertFavorite from '../components/Alert/AlertFavorite/AlertFavorite';
import { addElem, filterElem, simplificationAPI } from '../improvementFunc/functionsOptimization'


const App = () => {
    const [order, setOrder] = useState([]);
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);
    const [basket, setBascet] = useState(false);
    const [login, setLogin] = useState(false);
    const [finishShopihg, setFinishShoping] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertFavorite, setAlertFavorite] = useState(false);
    const [product, setProduct] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const [arrBrowser, setArrBrowser] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [category, setCategory] = useState(null);
    const [cnpNav, setCnpNav] = useState(['Все книги', 'Сказки', 'Детективы']);



    const pagesArray = useMemo(() => getPagesArr(totalPages), [totalPages])


    const [fetchPosts, isLoading, error] = useFetching(async () => {

        if (category === null) {
            let product = value.length !== 0 ? await PostSevise.getSearch() : await PostSevise.getAll(limit, page)
            simplificationAPI(setProducts, product, setTotalPages, getPageCount, limit)
        }

        else if (value.length !== 0) {
            let product = await PostSevise.getSearch()
            setProducts(product.data)
            setPage(1);
        }
        else {
            if (category === 'detective') {
                const product = await PostSevise.getDetective(limit, page)
                simplificationAPI(setProducts, product, setTotalPages, getPageCount, limit)
            }

            else if (category === 'skazki') {
                const product = await PostSevise.getSkazki(limit, page)
                simplificationAPI(setProducts, product, setTotalPages, getPageCount, limit)
            }
        }
    })

    useEffect(() => {
        fetchPosts();
    }, [page, value, category])

    const allPost = (e) => {
        setValue('');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setPage(1);

        if (e.target.innerText === 'Все книги') {
            setCategory(null);
        }
        else if (e.target.innerText === 'Сказки') {
            setCategory('skazki');
        }
        else if (e.target.innerText === 'Детективы') {
            setCategory('detective');
        }
    }


    const filterProducts = products.filter(elem => {
        return elem.name.toLowerCase().includes(value.toLowerCase())
    })

    const cnpActive = (page) => {
        setPage(page)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const addToOrder = (goodsItem) => {
        return addElem(goodsItem, order, setOrder)
    }

    const addYouBrowser = (goodsItem) => {
        return addElem(goodsItem, arrBrowser, setArrBrowser)
    }

    const addFavorite = (goodsItem) => {
        return addElem(goodsItem, favorite, setFavorite)
    }

    const removeFromOrder = (goodsItem) => {
        return filterElem(goodsItem, order, setOrder)
    }

    const removeElemFavorite = (goodsItem) => {
        return filterElem(goodsItem, favorite, setFavorite)
    };

    return (
        <div className={s.wrapper}>
            <div className={s.paddingWrapp}></div>

            <Routes>

                <Route path="/" element={<GoodsList
                    setAlertFavorite={setAlertFavorite}
                    alertFavorte={alertFavorite}
                    filterProducts={filterProducts}
                    addToOrder={addToOrder}
                    setAlert={setAlert}
                    alert={alert}
                    isLoading={isLoading}
                    addYouBrowser={addYouBrowser}
                    setArrBrowser={setArrBrowser}
                    addFavorite={addFavorite}
                />} />

                <Route path="/favorite" element={<Favorite
                    favorite={favorite}
                    setFavorite={setFavorite}
                    removeElemFavorite={removeElemFavorite}
                    addYouBrowser={addYouBrowser}
                />} />


                <Route path="/viewProduct/:id" element={<ViewProduct
                    setAlert={setAlert}
                    addToOrder={addToOrder}
                    order={order}
                    alert={alert}
                    product={product}
                    setProduct={setProduct}
                />} />
            </Routes>

            <AlertFavorite alertFavorte={alertFavorite} />

            <Nav value={value}
                setValue={setValue}
                order={order}
                setBascet={setBascet}
                setFinishShoping={setFinishShoping}
                setLogin={setLogin}
                fetchPosts={fetchPosts}
                allPost={allPost}
                favorite={favorite}
                cnpNav={cnpNav}
                category={category}
            />

            <SidebarBascet order={order}
                removeFromOrder={removeFromOrder}
                basket={basket}
                setBascet={setBascet}
                setLogin={setLogin}
                setFinishShoping={setFinishShoping}
            />
            <Login
                login={login}
                setFinishShoping={setFinishShoping}
                setBascet={setBascet}
                setLogin={setLogin}
            />
            <FinishShoping
                finish={finishShopihg}
                order={order}
                setOrder={setOrder}
                setFinishShoping={setFinishShoping}
                setLogin={setLogin}
            />

            <CnpPagination pagesArray={pagesArray} cnpActive={cnpActive} page={page} />

            <Alert alert={alert} />
            <YouBrowsed arrBrowser={arrBrowser} />

            <Footer />
        </div>
    );
}

export default App;