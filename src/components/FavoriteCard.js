import React, { useState, useEffect } from 'react'
import '../assets/cards.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const FavoriteCard = ({id}) => {

    const [favorite, setFavorite] = useState(false);
    const favorites = useSelector(state => state.favorites);
    const [character, setCharacter] = useState([{
        image: '',
        name: '',
        id: ''
    }]);

    useEffect(() => {
        const search = favorites.filter(character => character.id === id);
        setCharacter( search[0] );
    }, [favorites, id]);
    
  return (
    <div className="card max-w-sm w-full xs:max-w-full xs:flex">
        <div className="bg-zinc-800 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="items-center">
                <img className="w-30 h-30 rounded-full mr-4" src={character.image} alt={character.name} />
            </div>
            <div className="mb-8">
                <div className="text-gray-500 font-bold text-xl mb-2 font-bold">{character.name}</div>                      
            </div>
        </div>
    </div>
  )
}
