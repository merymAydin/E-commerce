import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="hidden md:block h-[500px]">

      <div className=" flex w-full justify-between bg-[#FAFAFA] h-[150px] px-50">


        <div className="flex items-center text-3xl font-bold">
          Bandage
        </div>

        <div className="flex items-center gap-3 text-cyan-500">
          <i className="fa-brands fa-instagram text-2xl"></i>
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-square-twitter text-2xl"></i>
        </div>

      </div>


      <div className="flex justify-between gap-5 px-50 pt-10">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Company Info</p>
            <Link to='/aboutus' className="text-[#808080]">About Us</Link>
            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Legal</p>
                        <Link to='/aboutus' className="text-[#808080]">About Us</Link>

            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Features</p>
                        <Link to='/aboutus' className="text-[#808080]">About Us</Link>

            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Resources</p>
                        <Link to='/aboutus' className="text-[#808080]">About Us</Link>

            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Get In Touch</p>
          <div className="flex">
            <input
              className="w-[250px] h-[50px] px-4  bg-[#FAFAFA]"
              type="email"
              placeholder="Your Email"
            />

            <button className="bg-cyan-500 text-white px-6 h-[50px]">
              Subscribe
            </button>
          </div>

        </div>

      </div>

      </div>



      <div className="flex md:hidden flex-col ">


        <div className="flex flex-col bg-[#FAFAFA] h-[150px] px-10 gap-5">

          <div className="flex items-center text-3xl font-bold mt-10">
            Bandage
          </div>

          <div className="flex items-center gap-3 text-cyan-500">
            <i className="fa-brands fa-instagram text-2xl"></i>
            <i className="fa-brands fa-facebook text-2xl"></i>
            <i className="fa-brands fa-square-twitter text-2xl"></i>
          </div>

        </div>


        <div className="flex flex-col gap-12 px-10 mt-10 pb-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Company Info</p>
                        <Link to='/aboutus' className="text-[#808080]">About Us</Link>

            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Legal</p>
                    <Link to='/aboutus' className="text-[#808080]">About Us</Link>

            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Features</p>
            <Link to='/aboutus' className="text-[#808080]">About Us</Link>
            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Resources</p>
            <Link to='/aboutus' className="text-[#808080]">About Us</Link>
            <a href="#" className="text-[#808080]">Carrier</a>
            <a href="#" className="text-[#808080]">We are hiring</a>
            <a href="#" className="text-[#808080]">Blog</a>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold">Get In Touch</p>
            <div className="flex">
              <input
                className="w-[250px] h-[50px] px-4  bg-[#FAFAFA]"
                type="email"
                placeholder="Your Email"
              />

              <button className="bg-cyan-500 text-white px-6 h-[50px]">
                Subscribe
              </button>
            </div>

          </div>

        </div>
      </div>


    </footer>
  )
}

export default Footer
