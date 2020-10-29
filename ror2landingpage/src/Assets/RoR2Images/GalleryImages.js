// Test file for react-image-gallery ignore for now does not get used

import image1 from './ror2ss01.jpg'
import image2 from './ror2ss02.jpg'
import image3 from './ror2ss03.jpg'
import image4 from './ror2ss04.jpg'
import image5 from './ror2ss05.jpg'
import image6 from './ror2ss06.jpg'
import image7 from './ror2ss07.jpg'
import image8 from './ror2ss08.jpg'

//First test run for import for react-image-gallery
export const imagesTest1 = [
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

//Second test run for import for react-image-gallery
export const imagesTest2 = [
    {
        src: image1,
        srcSet: [
            `${image1} 300w`,
            `${image1} 500w`,
            `${image1} 800w`

        ],
        sizes: ["(min-width: 300px) 20vw,(min-width:1024px) 13.3vw, 50vw"]
    },
    {
        src: image2,
        srcSet: [
            `${image2} 300w`,
            `${image2} 500w`,
            `${image2} 800w`

        ],
        sizes: ["(min-width: 300px) 20vw,(min-width:1024px) 13.3vw, 50vw"]
    }
]

//Exports of the images to be used in the image card component
export const imagesFinal1 = [
    {
        link: image1,
        title: 'image1',
        text: 'Play seamless four player co-op'
    },
    {
        link: image2,
        title: 'image2',
        text: 'Unlock over 110 items over time, keeping each run fresh and full of new challenges'
    },
    {
        link: image3,
        title: 'image3',
        text: 'Theorycraft and exploit endless item and character combos'
    },
    {
        link: image4,
        title: 'image2',
        text: 'Discover lore through the collection of Monster, Item, and Environment Logs'
    },
    {
        link: image5,
        title: 'image2',
        text: 'Play and unlock new and returning survivors, each with their own abilities to master'
    },
    {
        link: image6,
        title: 'image2',
        text: 'Challenge your friends—and the world—in all-new Prismatic Trials, a unique seeded run where everyone can race up a global leaderboard'
    },
    {
        link: image7,
        title: 'image2',
        text: 'Encounter challenging monsters and enormous bosses'
    },
    {
        link: image8,
        title: 'image2',
        text: 'Explore massive, handcrafted 3D levels'
    },

]