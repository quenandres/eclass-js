import React from 'react'
import { useState } from 'react';
import '../assets/cards.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite,deleteFavorite } from '../features/characters/characterSlice';


export const CardCharacter = ({character}) => {

    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        const {id, name, image} = character;
        if( !favorite ) { // Activar
            console.log(id, name, image);
            dispatch(addFavorite({id, name, image}));
        } else { // Desactivar
            dispatch(deleteFavorite(id));
        }
        setFavorite(!favorite);
    }

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
