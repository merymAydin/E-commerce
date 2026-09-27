import {  useSelector } from 'react-redux'
import Gravatar from "react-gravatar";
import NavbarDark from './NavbarDark';
import Navbar from './Navbar';
 
 

const Header = () => {


  const user = useSelector((state) => state.user);
  console.log("HEADER USER:", user);

 

  



  return (
    <>
      {user && <span>{user.name}</span>}
      {user && <Gravatar email={user.email} />}
      <NavbarDark />
      <Navbar />
 
    </>

  )
}

export default Header
