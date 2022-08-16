import React, { useEffect } from 'react'
import { useState } from 'react';
import '../assets/cards.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../features/characters/favoriteSlice';


export const CardCharacter = ({character}) => {

    const [favorite, setFavorite] = useState(false);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const handleClick = async () => {
        console.log(character);
        if( !favorite ) { // Activar
            await dispatch(addFavorite({character}));
        } else { // Desactivar
            await dispatch(deleteFavorite(character.id));
        }
        
        setFavorite(!favorite);
        await localStorage.setItem('favorites_storage', JSON.stringify(favorites));
    }

    useEffect(() => {
        // Recorrer storage y definir si esta o no en favoritos redux
        /*const favorite_storage = JSON.parse(localStorage.getItem('favorite_storage'));
        if( favorites && (favorites.length == 0 && favorite_storage.length > 0) ) {
            localStorage.setItem('favorites_storage', JSON.stringify(favorite_storage));
        }  else if( favorites ) {
        } */
    }, [favorite]); 

    // Funcion para poner el favorito en el card si esta en el storage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites_storage'));
        if( favorites ) {
            console.log('favorites');
            console.log(favorites);
            const favoriteCard = favorites.some(favorite => favorite.id === character.id);        
            if( favoriteCard ) {
                setFavorite(true);
            }
        }
    }, []);

  return (
    <div className="card max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-zinc-800 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <Link to={`see/${character.id}`}>
                <div className="items-center">
                    <img className="w-100 h-100 rounded-full mr-4" src={character.image} alt={character.name} />
                </div>
                <div className="mb-8">
                    <div className="text-gray-500 font-bold text-xl mb-2 font-bold">{character.name}</div>                                  
                </div>
            </Link>

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
  )
}
