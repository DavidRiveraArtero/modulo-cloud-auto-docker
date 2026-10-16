import axios from "axios";

import { RickCollectionModel } from "./rick-collection.api-model";

export const getRickCollection = ():Promise<RickCollectionModel> => 
    axios.get('https://rickandmortyapi.com/api/character')
        .then((data) => data.data)
        .then((character) => character)