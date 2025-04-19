import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Todo App</h1>
      <div className="links">
        <Link to="/todos">Todos</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;