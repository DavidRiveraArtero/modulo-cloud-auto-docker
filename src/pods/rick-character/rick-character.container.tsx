import React, {FC, useEffect, useState} from "react";
import { RickCharacter } from "./rick-character.component";
import { useParams } from "react-router-dom";
import { Character, getCharacter } from "./api";


export const RickCharacterContainer:FC = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState<Character>()

    useEffect( () => {
        if(!id) return
        getCharacter(id).then(setCharacter)
    }, [id])
    
    if(!character) return "CARGANDO"
  
    return <RickCharacter character={character}/>
}