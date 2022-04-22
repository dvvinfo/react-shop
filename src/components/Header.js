import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div className="headerInfo">
                    <h3 className="text-uppercase" >React Shop</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight d-flex align-center">
                <li className="mr-30">
                    <img width={20} height={20} src="/img/cart.svg" alt=""/>
                    <span>1205 руб.</span></li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt=""/>

                </li>
            </ul>
        </header>
    );
};

export default Header;