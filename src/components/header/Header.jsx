import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">My Website</div>
            <nav className="space-x-4">
                <a href="/details" className="hover:underline">Details</a>
                <a href="/contact" className="hover:underline">Contact</a>
                <a href="/discover" className="hover:underline">Discover</a>
            </nav>
        </header>
    );
  }
  
  export default Header;
  