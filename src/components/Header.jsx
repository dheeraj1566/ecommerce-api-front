import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-red-400 flex justify-between items-center px-12 py-1 text-white">
      <h1 className="text-3xl font-bold">Ecommerce</h1>
      <ul className="flex">
        <li>
          <NavLink to="/" className="px-2 mx-2 py-2">Home</NavLink>
        </li>
        <li>
          <NavLink to="/" className="px-2 mx-2 py-2">About</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
