import axios from "axios"
import {Character} from "./rick-character.api-model"
export const getCharacter = (id):Promise<Character> => 
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((data) => data.data)