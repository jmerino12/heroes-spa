import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <ul>
            {heroes.map((heroe) => (
                <li key={heroe.id}>{heroe.characters}</li>
            ))}
        </ul>
    )
}
