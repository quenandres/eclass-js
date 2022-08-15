import React, { useEffect, useState } from 'react'
import { FavoriteCard } from './FavoriteCard';
import { Menu } from './Menu';

export const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites_storage'));
        console.log("favorites");
        console.log(favorites);
        setFavorites(favorites);
    }, []);
    
    if ( favorites ) {
        return (
            <>       
                <Menu />     
                <div className='cards'>
                    {favorites.map((favorite) => (
                        <>
                            <FavoriteCard key={favorite.id} character={favorite.character}/>
                        </>
                    ))}
                </div>                     
            </>
        );        
    } else {
        return (
            <>
                <Menu /><h1>No existen registros de favoritos..</h1>
            </>
        );
    }
}
