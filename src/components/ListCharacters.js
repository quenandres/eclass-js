import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { useEffect } from 'react';
import { useState } from 'react';
import { CardCharacter } from './CardCharacter';
import '../assets/cards.css';

const FILMS_QUERY = gql`
  query($page:Int, $filter: FilterCharacter){
        characters(page:$page,filter:$filter){
        info {
            pages
            count
            next
            prev
        }
        results{
                id
                name
                image
                status
                gender
                species
        }
    }        
  }
`;

export const ListCharacters = () => {
    const { data, loading, error } = useQuery(FILMS_QUERY);
    const [ characters, setCharacters ]  = useState([]);
  
    useEffect(() => {
      if(data) {
        setCharacters(data.characters.results);
      }
    }, [data]);
  
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  
    return (
      <div className='cards'>        
          {characters.map((character) => (
            <CardCharacter key={character.id} character={character}/>
          ))}
      </div>
    );
}
