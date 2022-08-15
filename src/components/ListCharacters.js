import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { useEffect } from 'react';
import { useState } from 'react';
import { CardCharacter } from './CardCharacter';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../features/characters/favoriteSlice';
import { assignCharacters } from '../features/characters/charactersSlice';
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
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
      if(data) {
        setCharacters(data.characters.results);
      }
    }, [data]);
    
    useEffect(() => {
      console.log('characters');
      console.log(characters);
      dispatch(assignCharacters(characters)); // Rellena con localstorage a redux      
    }, [characters]);


    useEffect(() => {
      const favorites_storage = JSON.parse(localStorage.getItem('favorites_storage'));
      if( favorites_storage.length > 0 && favorites.length == 0 ) { //Defino estado global como vacio
        favorites_storage.map(item => {
          dispatch(addFavorite(item)); // Rellena con localstorage a redux
        })
      }      
      

    }, []);
  
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
