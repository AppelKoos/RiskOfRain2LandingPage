import React from 'react'
import ReactPlayer from 'react-player'

import './Trailer.css'

const Trailer = () => {
    return (
        <div id="media-video" className="trailer__container">
            <h2> Risk of Rain 2 Trailer</h2>
            <div className="trailer__video-container">
              <ReactPlayer url="https://www.youtube.com/watch?v=Qwgq_9EOCTg" />  
            </div>
        </div>
    )
}
export default Trailer