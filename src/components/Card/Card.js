import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {

    const onClickButton = () => {}

    return (
        <div className={styles.card}>
            <div className={styles.CardImg}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
                <img width={133} height={112} src={props.imageUrl} alt=""/>
                <h5 className="">{props.title}</h5>
            </div>

            <div className="d-flex justify-between align-center ">
                <div className="d-flex flex-column w-100 ">
                    <p className="mt-30">Цена: </p>
                    <div className=" d-flex justify-between ">
                        <b >{props.price} руб.</b>
                        <button onClick={onClickButton} className={styles.button}>
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;