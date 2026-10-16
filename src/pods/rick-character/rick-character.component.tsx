import React, {FC} from "react";
import "./rick-character.component.scss"
import { Character } from "./api/rick-character.api-model";

interface Props {
    character: Character
}


export const RickCharacter:FC<Props> = ({character}) => {
    // DE ESTA FORMA PUEDO RECOGER EL ID DE LOS PERSONAJES QUE ME REGRESA EL LOCATION
    console.log("https://rickandmortyapi.com/api/character/20".split("/")["https://rickandmortyapi.com/api/character/20".split("/").length - 1])
    return (
        <>
            <div className="character_container">
                <section className="character_container_header">
                    <h1 className="character_container_header_title">{character.name}</h1>
                    <div className="character_container_header_info">
                        <div className={character.status === 'Alive' ? 'isAlive' : 'isNotAlive'} />
                        <p className="character_container_header_info_subtitle">{character.status} - {character.species}</p>
                    </div>
                </section>
                <section className="character_container_img">
                    <img src={character.image} alt={character.name} />
                </section>
                <section className="character_container_location">
                    <h2 className="character_container_location_title">Location</h2>
                    <h3 className="character_container_location_subtitle">{character.origin.name}</h3>
                    <div>

                    </div>
                </section>
                <section>
                    <h2>EPISODES</h2>
                </section>
            </div> 
        </>
   
        )
}

