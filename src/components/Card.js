import React from 'react';

const Card = () => {
    return (
        <div className="card ">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column w-100 ">
                    <p className="mt-30">Цена: </p>
                    <div className="d-flex justify-between ">
                        <b >12 999 руб.</b>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;