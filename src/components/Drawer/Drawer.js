import React from 'react';
import styles from './Drawer.module.scss'

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className={styles.drawer}>
            <h2 className="d-flex justify-between  mt-30">Корзина
                <img className="cu-p" width={30} height={30} src="/img/btn-remove.svg" alt="remove"/>
            </h2>
            <div className={styles.items}>
                <div className={styles.cartItem }>
                    <div className={styles.cartItemImg} style={{backgroundImage:'url(/img/sneakers/1.jpg)'}}></div>
                    <div className="mr-20  ">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>

                    <button className={styles.removeBtn }>
                        <img width={30} height={30} src="/img/btn-remove.svg" alt="remove"/>
                    </button>
                </div>

            </div>
            <div className={styles.cartTotalBlock}>
                <ul >
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 489 руб.</b>
                    </li>
                    <li >
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1024 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ
                    <img src="/img/arrow.svg" alt="arrow"/>
                </button>
            </div>

        </div>
        </div>
    );
};

export default Drawer;