import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss'


const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
            <div className={styles.headerLeft}>
                <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase" >React Shop</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            </Link>
            <ul className={styles.headerRight} >
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img width={20} height={20} src="/img/cart.svg" alt="cart"/>
                    <span>1205 руб.</span></li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={20} height={20} src="/img/heart.svg" alt="heart"/>
                    </Link>

                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="user"/>

                </li>
            </ul>
        </header>
    );
};

export default Header;