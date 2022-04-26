import React from 'react';
import styles from './Drawer.module.scss'

const Drawer = ({onClose, onRemove, items = []}) => {
    return (
        <div className="overlay">
        <div className={styles.drawer}>
            <h2 className="d-flex justify-between  mt-30">Корзина
                <img onClick={onClose} className="cu-p" width={30} height={30} src="/img/btn-remove.svg" alt="remove"/>
            </h2>

            {
                items.length > 0 ? <div>
                    <div className={styles.items}>
                        {items.map((obj) => (
                            <div className={styles.cartItem }>
                                <div className={styles.cartItemImg} style={{backgroundImage:`url(${obj.imageUrl})`}}></div>
                                <div className="mr-20  ">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>

                                <button className={styles.removeBtn }>
                                    <img onClick={() => onRemove(obj.id)} width={30} height={30} src="/img/btn-remove.svg" alt="remove"/>
                                </button>
                            </div>
                        ))}

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
                    :
                    <div className="cartEmpty ">
                        <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="empty-cart"/>
                        <h2>Корзина пуста</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кросовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow.svg" alt=""/>
                            вернуться назад
                        </button>
                    </div>
            }


        </div>
        </div>
    );
};

export default Drawer;