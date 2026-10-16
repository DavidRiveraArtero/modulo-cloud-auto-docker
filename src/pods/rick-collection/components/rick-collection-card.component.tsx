import React, {FC} from "react";
import { Result } from "../api";
import "./rick-collection-card.compoment.style.scss"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    character: Result
}

export const RickCollectionCard:FC<Props> = ({character}) => {
    
    return (
        <div className="card_collection">
            
            <img className="" src={character.image} alt={character.name} />
        
            <div className="card_collection_info">
                <div className="card_collection_info_header">
                    <div className="card_collection_info_header_info">
                        <h2>{character.name}</h2>
                        <div className={character.status === 'Alive' ? 'isAlive' : 'isNotAlive'}/>
                    </div>
                    <p className="card_collection_info_header_origin">{character.species}</p>
                </div>
                <div>
                    <div> 
                        Last known location: 
                        <p>{character.origin.name}</p>
                    </div>
                    <p>{character.episode.length}</p>
                </div>
                <Button component={Link} to={`/rick/${character.id}`} variant="contained">Info</Button>
           
            </div>
        </div>

    )
}