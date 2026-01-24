import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">TMS App</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Reports</a>
          <a href="#" className="hover:underline">Settings</a>
          <button onClick={logout} className="hover:underline">Logout</button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">☰</button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block hover:underline">Dashboard</a>
          <a href="#" className="block hover:underline">Reports</a>
          <a href="#" className="block hover:underline">Settings</a>
          <button onClick={logout} className="block hover:underline">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;