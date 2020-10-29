import React from 'react';

import './about.css'

const about = () => {
    return (
        <div className="AboutSection" >
            <div className="About" >
                <h1>About</h1>
                <p>
                    Escape a chaotic alien planet by
                    fighting through hordes of frenzied monsters
                    – with your friends, or on your own.<br /> Combine loot in
                    surprising ways and master each character until you become
                    the havoc you feared upon your first crash landing.
                </p>
            </div>
            <div className="About__container">
                <div className="About-info__1">
                    <h1 >Survice an alien planet</h1>
                    <p>
                        Over a dozen handcrafted locales await,<br />
                        each packed with challenging monsters and enormous<br />
                        bosses that oppose your continued existence.<br />
                        Fight your way to the final boss and escape or continue<br />
                        your run indefinitely to see just how long you can survive.<br />
                        A unique scaling system means both you and your foes<br />
                        limitlessly increase in power over the course of a game.
                    </p>
                </div>
                <div className="About-info__2">
                    <h1>Unlock new ways to play</h1>
                    <p>
                        Unlock a crew of ten playable survivors,<br />
                        each with their own unique combat style and alternate skills to master.<br />
                        Learn the secrets of the Artifacts to toggle gameplay modifiers<br />
                        like friendly fire, random survivor spawns, item selection and more.<br />
                        With randomized stages, enemies, and items, no run will ever be the same.
                    </p>
                </div>
                <div className="About-info__3">
                    <h1>Discover powerful new items</h1>
                    <p>
                        More than 110 items keep each run fresh and full of new challenge.<br />
                        The more items you collect, the more their effects combine,<br />
                        the more surprising some of those combinations might be.<br />
                        The more items you encounter, the more lore (and strategy)<br />
                        you’ll discover through the logs.
                    </p>
                </div>
                <div className="About-info__4">
                    <h1>Play solo or co-op</h1>
                    <p>
                        Tackle the adventure solo or with up to three friends in online co-op,<br />
                        or compete in the rotating challenge of the Prismatic Trials.<br />
                        Brand new survivors like the Captain and MUL-T join classic<br />
                        survivors such as the Engineer, Huntress, and–of course–the Commando.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default about