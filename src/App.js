
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([])
    const [cardOpened, setOpened] = useState(false);
    useEffect(() => {
        fetch('https://6266bc9c7863833642165b98.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then((json) => {
                setItems(json)
            })
    },[])

    const onAddToCart = (obj) => {
        setCartItems(prev =>[...prev, obj])
    }

   return (
    <div className="wrapper clear">
        {/*============Корзина===============*/}
        {cardOpened ? <Drawer items={cartItems} onClose={() => {setOpened(false)}}/> : null}
        {/*============ header ===============*/}
        <Header onClickCart={() => setOpened(true)} />
        {/*============ content ===============*/}
        <div className="content  p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
        </div>
        <div className="d-flex flex-wrap">
            {/*============ card ===============*/}
            { items.map((item) => (
                <Card
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
