import React from 'react';

import classes from './roadmap.module.css'
import pcRoadmap from '../../../Assets/RoR2Images/RoR2_PCRoadmap.jpg'
import consoleRoadmap from '../../../Assets/RoR2Images/RoR2_ConsoleRoadmap.jpg'

const roadmap = () => {
    return (
        <div>
            <h2> Risk of Rain 2 PC and Stadia Roadmap</h2>
            <img className={classes.RoadmapImage} src={pcRoadmap} alt="PC roadmap not loaded console peasant" />
            <h2> Risk of Rain 2 Console Roadmap</h2>
            <img className={classes.RoadmapImage} src={consoleRoadmap} alt="Console roadmap not loaded but who cares really?" />
        </div>
    )
}
export default roadmap