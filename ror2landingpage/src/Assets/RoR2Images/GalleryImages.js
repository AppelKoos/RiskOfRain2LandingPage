import image1 from './ror2ss01.jpg'
import image2 from './ror2ss02.jpg'
import image3 from './ror2ss03.jpg'
import image4 from './ror2ss04.jpg'
import image5 from './ror2ss05.jpg'
import image6 from './ror2ss06.jpg'
import image7 from './ror2ss07.jpg'
import image8 from './ror2ss08.jpg'

export default [
    {
        original: image1,
        thumbnail: image1,
        imageSet: [
            {
                srcSet: image1,
                media: 'max-width: 600px'
            }

        ]
    },
    {
        original: image2,
        thumbnail: image2
    },
    {
        original: image3,
        thumbnail: image3
    },
    {
        original: image4,
        thumbnail: image4
    },
    {
        original: image5,
        thumbnail: image5
    },
    {
        original: image6,
        thumbnail: image6
    },
    {
        original: image7,
        thumbnail: image7
    },
    {
        original: image8,
        thumbnail: image8
    },
]