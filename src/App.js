
import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
        <div className="  d-flex">
            {/*============ card ===============*/}
            <Card/>
        </div>
    </div>
  );
}

export default App;
