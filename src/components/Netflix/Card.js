import React from 'react';

const Card = (props) => {
    return (
        <>
        <div className="cards">
        <div className="card">
        
            <img src={props.imgsrc} alt="myPic" className="card__img" height="200" width="200" />

            <div className="card__info">
                <span className="card__category">{props.title}</span>
                <h3 className="card__title">{props.sname}</h3>
                <a href={props.links} target="_blank">
                    <button> Watch Now </button>
                </a>
            </div>

        </div>
    </div>
    </>
    )
}

export default Card;