import React, {FC} from "react";
import { Result } from "./api/rick-collection.api-model";
import { RickCollectionCard } from "./components/rick-collection-card.component";
import "./rick-collection.component.syle.scss"
interface Props {
    rickCollection: Result[]
}
export const RickCollection:FC<Props> = ({rickCollection}) => {
    
    return (
        <section className="rick-collection">
            {rickCollection.map((character) => {
                return (
                    <RickCollectionCard character={character} key={character.name}/>
                )
            })}
        </section>
    )
}