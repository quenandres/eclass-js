import { Link } from "react-router-dom";


export const Menu = () => {
    return (
        <ul className="flex">
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/">Personajes</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" to="/favorites">Favoritos</Link>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="#">Test 1</a>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="#">Test 2</a>
            </li>
        </ul>
    );
}
