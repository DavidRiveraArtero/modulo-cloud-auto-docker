import React, {FC, useEffect, useState} from "react";

import { RickCollection } from "./rick-collection.component";
import { Result,getRickCollection,RickCollectionMock } from "./api";




export const RickCollectionContainer:FC = () => {
    const [rickCollection,setRickCollection] = useState<Result[]>([])

    /*useEffect(() => {
        getRickCollection().then(data => setRickCollection(data.results))
    },[])*/


    return <RickCollection rickCollection={RickCollectionMock}/>
}