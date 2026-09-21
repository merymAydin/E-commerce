import { Phone, Mail } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";



const NavbarDark = () => {
  return (
    <div className='hidden md:flex bg-[#252B42] h-[50px] flex justify-between '>
        <div className="w-full flex items-center justify-between px-8">
          <div className="flex items-center gap-12">
            <span className="flex items-center gap-2 text-white font-bold">
              <Phone />
              (225) 555-0118
            </span>
            <span className="flex items-center gap-2 text-white font-bold">

              <Mail />
              michelle.rivera@example.com
            </span>

          </div>
          <div className="text-white font-bold">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>

          <div className="flex items-center gap-4 text-white font-bold">
            <p>Follow Us:</p>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
          </div>
        </div>
      </div>
  )
}

export default NavbarDark
