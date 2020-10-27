import React from 'react';
import ImageGallery from 'react-image-gallery'
import images from '../../../Assets/RoR2Images/GalleryImages'

const gallery = () => {
    return (
        <div>
            <h2>Gallery</h2>
            <ImageGallery items={images} />
        </div>
    )
}
export default gallery