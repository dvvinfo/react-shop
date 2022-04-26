import axios from "axios";
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
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
    },[])

    const onAddToCart = (obj) => {
        axios.post('https://6266bc9c7863833642165b98.mockapi.io/cart', obj);
        setCartItems(prev =>[...prev, obj])
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://6266bc9c7863833642165b98.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
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
        <div className="content  p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    {searchValue && <img onClick={() => setSearchValue('') } className="clear cu-p" src="/img/btn-remove.svg" alt="remove"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>

                </div>
            </div>
        </div>
        <div className="d-flex flex-wrap">
            {/*============ card ===============*/}
            { items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => (
                <Card
                    key={index}
                    title={item.title}
                    price ={item.price}
                    imageUrl ={item.imageUrl}
                    onPlus={(obj) => onAddToCart(obj) }
                    onClickFavorite={() => console.log()}
                />
                ))}
        </div>
    </div>
  );
}

export default App;
