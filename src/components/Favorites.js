import React, { useEffect, useState } from 'react'
import { FavoriteCard } from './FavoriteCard';
import { Menu } from './Menu';

export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites_storage')));
    }, []);
    
    return (
        <>
            <Menu />
            { favorites.length > 0 && <div className='cards'>
                                        {favorites.map((favorite) => (
                                            <FavoriteCard key={favorite.id} id={favorite.id}/>
                                        ))}
                                    </div>
            }

                     
        </>
    )
}
