import React from 'react'
import { useSelector } from 'react-redux';

export const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    
    return (
        <div>
            {favorites.map((favorite) => (
                <p>{favorite.name}</p>
            ))}
        </div>
    )
}
