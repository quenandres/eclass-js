import React from 'react'
import { useSelector } from 'react-redux';
import { FavoriteCard } from './FavoriteCard';

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    return (
        <div className='cards'>
            {favorites.map((favorite) => (
                <FavoriteCard key={favorite.id} id={favorite.id}/>
            ))}
        </div>
    )
}
