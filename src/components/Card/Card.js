import React, {useState} from 'react';
import styles from './Card.module.scss'

const Card = ({onFavorite,id, imageUrl,title, price, onPlus, favorited = false}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({imageUrl,title, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite= () => {
        onFavorite({ id,imageUrl,title, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.CardImg}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={ isFavorite ? "/img/liked.svg" : "/img/unliked.svg" } alt="unliked"/>
            </div>
                <img width={133} height={112} src={imageUrl} alt=""/>
                <h5 className="">{title}</h5>
            </div>

            <div className="d-flex justify-between align-center ">
                <div className="d-flex flex-column w-100  ">
                    <p className="mt-30">Цена: </p>
                    <div className=" d-flex justify-between  ">
                        <b >{price} руб.</b>
                            <img className={styles.plus}  onClick={onClickPlus } src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="plus"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;