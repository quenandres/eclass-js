import React, { useEffect } from 'react'
import { useState } from 'react';
import '../assets/cards.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite,deleteFavorite } from '../features/characters/favoriteSlice';
import { Menu } from './Menu';


export const SeeCard = () => {
    const [favorite, setFavorite] = useState(false);
    const [character, setCharacter] = useState({});
    const params   = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const handleClick = () => {
        const {id, name, image} = character;
        if( !favorite ) { // Activar
            dispatch(addFavorite({id, name, image}));
        } else { // Desactivar
            dispatch(deleteFavorite(id));
        }
        setFavorite(!favorite);
    }

    useEffect(() => {        
        if( favorites.length > 0 ) {
            localStorage.setItem('favorites_storage', JSON.stringify(favorites)); // Agrega listado de favoritos en localstorage
        }
    }, [favorite]);

    useEffect(() => {
        const characters = JSON.parse(localStorage.getItem('characters'));
        if( params.id ) {
            const characterFound = characters.find(character => character.id === params.id);
            if( characterFound ) {
                setCharacter(characterFound);
                console.log('characterFound');
                console.log(characterFound);
              //character = {...characterFound};
            }
          }
        
    }, []);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites_storage'));
        if( favorites ) {
            const favoriteCard = favorites.some(favorite => favorite.id === character.id);        
            if( favoriteCard ) {
                setFavorite(true);
            }
        }
    }, []);

  return (
      <>
        <Menu />
        <div className="card max-w-sm w-full lg:max-w-full lg:flex">
            <div className="bg-zinc-800 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={character.image} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                        </a>
                    </div>
                    <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        <b className='m-2 p-2'>Estado</b>
                        {character.status}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        <b className='m-2 p-2'>Especie</b>
                        {character.species}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        <b className='m-2 p-2'>Genero</b>
                        {character.gender}
                    </span>
                </div>   
                </div>
                <button 
                    className={
                        !favorite ? 
                        'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' 
                        :'bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded' 
                    }
                    onClick={handleClick}
                > { !favorite ? 'Agrega a Favoritos' : 'Eliminar de Favoritos' }</button>
            </div>
        </div>    
    </>
  )
}
