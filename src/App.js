
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const  arr = [
    {title: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
    {title: 'Мужские кроссовки Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
    {title: 'Мужские кроссовки Nike Blazer Mid Suede', price: 8600, imageUrl: '/img/sneakers/3.jpg'},
    {title: 'Мужские кроссовки Puma X Aka Boku Future Rider', price: 8900, imageUrl: '/img/sneakers/4.jpg'},
]

function App() {

   return (
    <div className="wrapper clear">
        {/*============Корзина===============*/}
        <Drawer/>
        {/*============ header ===============*/}
        <Header/>
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
        <div className="d-flex">
            {/*============ card ===============*/}
            { arr.map((obj) => (
                <Card
                    title={obj.title}
                    price ={obj.price}
                    imageUrl ={obj.imageUrl}
                />
                ))}
        </div>
    </div>
  );
}

export default App;
