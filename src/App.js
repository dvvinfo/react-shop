import axios from "axios";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [cardOpened, setOpened] = useState(false);
    useEffect(() => {
        // fetch('https://6266bc9c7863833642165b98.mockapi.io/items')
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then((json) => {
        //         setItems(json)
        //     });
            axios.get('https://6266bc9c7863833642165b98.mockapi.io/items').then(res => {
                setItems(res.data)
            });
            axios.get('https://6266bc9c7863833642165b98.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        });
        axios.get('https://6266bc9c7863833642165b98.mockapi.io/favorites').then(res => {
            setFavorites(res.data)
        });
    },[])

    const onAddToCart = (obj) => {
        axios.post('https://6266bc9c7863833642165b98.mockapi.io/cart', obj);
        setCartItems(prev =>[...prev, obj])
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://6266bc9c7863833642165b98.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
    const onAddToFavorites = async (obj) => {
        try {
            if(favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://6266bc9c7863833642165b98.mockapi.io/favorites/${obj.id}`);
            }else {
                const {data} = await axios.post('https://6266bc9c7863833642165b98.mockapi.io/favorites', obj);
                setFavorites(prev =>[...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты')
        }

    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

   return (
    <div className="wrapper clear">
        {/*============Корзина===============*/}
        {cardOpened ? <Drawer items={cartItems} onClose={() => {setOpened(false)}} onRemove={onRemoveItem} /> : null }
        {/*============ header ===============*/}
        <Header onClickCart={() => setOpened(true)} />
        {/*============ content ===============*/}
        <Routes>
            <Route path="/" exatc element={<Home items ={items}
                                            searchValue={searchValue}
                                            setSearchValue={setSearchValue}
                                            onChangeSearchInput = {onChangeSearchInput}
                                            onAddToFavorites={onAddToFavorites}
                                            onAddToCart={onAddToCart}/>}>

            </Route>
            <Route path="/favorites" element={<Favorites items={favorites}
                                                         onAddToFavorites={onAddToFavorites}/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
