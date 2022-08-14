import React, { useState, useEffect } from 'react'
import '../assets/cards.css';
import { useSelector } from 'react-redux';

export const FavoriteCard = ({id}) => {
    const favorites = useSelector(state => state.favorites);
    const [character, setCharacter] = useState([{
        image: '',
        name: '',
        id: ''
    }]);

    useEffect(() => {
        const search = favorites.filter(character => character.id === id);
        if( search ) {
            setCharacter( search[0] );
        }
    }, [favorites, id]);
    
  return (
    <div className="card max-w-sm w-full xs:max-w-full xs:flex">
        <div className="bg-cyan-300 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="items-center">
                <img className="w-200 h-200 rounded-bl-full" src={character.image} alt={character.name} />
            </div>
            <div className="mb-8">
                <div className="text-gray-500 font-bold text-xl mb-2 font-bold">{character.name}</div>                      
            </div>
        </div>
    </div>
  )
}
