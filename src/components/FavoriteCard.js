import React from 'react'
import { useState } from 'react';
import '../assets/cards.css';
import { Link } from 'react-router-dom';


export const FavoriteCard = ({character}) => {

    const [favorite, setFavorite] = useState(false);

    const handleClick = (id) => {
        setFavorite(!favorite);
    }

  return (
    <div className="card max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-zinc-800 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="items-center">
                <img className="w-100 h-100 rounded-full mr-4" src={character.image} alt={character.name} />
            </div>
            <div className="mb-8">
                <div className="text-gray-500 font-bold text-xl mb-2 font-bold">{character.name}</div>                      
            </div>
            <Link to={`see/${character.id}`}>
                <button
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                >Ver</button>
            </Link>
        </div>
    </div>
  )
}
