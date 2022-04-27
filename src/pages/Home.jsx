import React from 'react';
import Card from "../components/Card";

const Home = ({items,searchValue,setSearchValue, onChangeSearchInput,onAddToCart,onAddToFavorites }) => {
    return (
        <div className="content  p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    {searchValue && <img onClick={() => setSearchValue('') } className="clear cu-p" src="/img/btn-remove.svg" alt="remove"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>

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
                        onFavorite = {(obj) => onAddToFavorites (obj)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home; 