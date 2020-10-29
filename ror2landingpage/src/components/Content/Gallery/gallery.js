import React from 'react';
// import ImageGallery from 'react-image-gallery'
// import images from '../../../Assets/RoR2Images/GalleryImages'

import ImageCard from '../../../shared/ImageCard/imageCard'
import { imagesFinal1 } from '../../../Assets/RoR2Images/GalleryImages'

import './gallery.css';

const gallery = () => {
    return (
        <div className="Gallery__image">
                {imagesFinal1.map(image => (
                    <ImageCard
                        imageLink={image.link}
                        imageTitle={image.title}
                        imageText={image.text}
                    />
                ))}
        </div>
    )
}
export default gallery