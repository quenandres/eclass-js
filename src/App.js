import './App.css';
import { Favorites } from './components/Favorites';
import { ListCharacters } from './components/ListCharacters';
import { Menu } from './components/Menu';

export default function App() {

  return (
    <>
      <Menu />
      <ListCharacters />    
    </>
  );
}
