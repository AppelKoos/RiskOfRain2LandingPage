import React from 'react'

import './ImageCard.css'

const ImageCard = props => {
    return (
        <div className="image-card__main-wrapper">
            <img className="image-card__img" src={props.imageLink} alt={props.imageTitle} />
            <p className="image-card__text">
                {props.imageText}
            </p>
        </div>)
}
export default ImageCard