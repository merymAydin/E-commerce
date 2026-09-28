import { useSelector } from 'react-redux'
import Gravatar from "react-gravatar";
import NavbarDark from './NavbarDark';
import Navbar from './Navbar';
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {


  const user = useSelector((state) => state.user);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);








  return (
    <>
      {user && (
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <span>{user.name}</span>
          <Gravatar email={user.email} />

          {isUserMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 w-40 z-50">
              <Link to="/previous-orders">
                Previous Orders
              </Link>
            </div>
          )}
        </div>
      )}
      <NavbarDark />
      <Navbar />

    </>

  )
}

export default Header
