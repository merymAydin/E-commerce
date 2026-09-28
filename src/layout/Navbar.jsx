import {
    ChevronDown,
    Heart,
    Menu,
    Search,
    ShoppingCart,
    User2Icon
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/productActions";
import { Link } from "react-router-dom";

function Navbar() {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.product.categories);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const user = useSelector((state) => state.user);


    const womenCategories = categories.filter(
        (c) => c.gender === "k"
    );

    const menCategories = categories.filter(
        (c) => c.gender === "e"
    );

    const [isOpen, setIsOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replaceAll("ı", "i")
            .replaceAll("ş", "s")
            .replaceAll("ğ", "g")
            .replaceAll("ü", "u")
            .replaceAll("ö", "o")
            .replaceAll("ç", "c");
    };



    return (
        <>

            <div className="hidden md:flex bg-white h-[100px] items-center">

                <div className="flex items-center text-3xl font-bold left-[10%] px-10 gap">
                    Bandage
                </div>

                <div className="flex items-center gap-6 ml-20">

                    <a>Home</a>

                    <div className="relative">
                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <a>Shop</a>
                            <ChevronDown size={16} />
                        </div>

                        {isOpen && (
                            <div className="absolute z-50 bg-white w-[330px] h-[350px] top-10 left-[-40px] px-10 py-6 flex gap-16">

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-sm font-bold text-[#252B42]">
                                        Kadın
                                    </h3>

                                    {womenCategories.map((c) => (
                                        <Link
                                            key={c.id}
                                            to={`/shop/kadin/${createSlug(c.title)}/${c.id}`}
                                            className="text-sm font-bold text-[#737373]"
                                        >
                                            {c.title}
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-sm font-bold text-[#252B42]">
                                        Erkek
                                    </h3>

                                    {menCategories.map((c) => (
                                        <Link
                                            key={c.id}
                                            to={`/shop/erkek/${createSlug(c.title)}/${c.id}`}
                                            className="text-sm font-bold text-[#737373]"
                                        >
                                            {c.title}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        )}
                    </div>

                    <Link to="/aboutus">About</Link>
                    <a>Contact</a>
                    <a>Pages</a>
                </div>

                <div className="flex items-center gap-5 text-cyan-500 right-[10%] px-10 ml-auto">

                    <div className="flex items-center gap-1 font-bold">
                        <User2Icon />
                        <a href="/login">login</a>
                        <span>/</span>
                        <a href="/signup">Register</a>
                    </div>

                    <Search />
                    <div className="relative">
                        <ShoppingCart onClick={() => setIsCartOpen(!isCartOpen)} />

                        {isCartOpen && (
                            <div className="absolute right-0 top-8 w-[380px] bg-white shadow-lg z-50">
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-4 text-black">My Cart ( {cart.length} products ) </h3>
                                    {cart.length === 0 ? (
                                        "Your cart is empty"
                                    ) :
                                        <ul>
                                            {cart.map(item =>
                                            (
                                                <li
                                                    key={item.product.id}
                                                    className="flex gap-4 py-4 border-b"
                                                >
                                                    <img
                                                        src={item.product.images[0].url}
                                                        alt={item.product.name}
                                                        className="w-16 h-20 object-cover"
                                                    />

                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-black">
                                                            {item.product.name}
                                                        </span>

                                                        <span className="text-sm text-gray-400">
                                                            Quantity: {item.count}
                                                        </span>

                                                        <span className="text-orange-400">
                                                            {item.product.price} TL
                                                        </span>
                                                    </div>
                                                </li>
                                            )
                                            )}
                                        </ul>
                                    }
                                    <div className="flex gap-3 mt-4">
                                        <Link
                                            to="/cart"
                                            className="flex-1 bg-gray-100 text-black py-2 rounded text-center"
                                        >
                                            Go to Cart
                                        </Link>

                                        <button className="flex-1 bg-orange-500 text-white font-bold py-2 rounded">
                                            Complete Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Heart />

                </div>
            </div>



            <div className="flex md:hidden flex-col px-6 h-[600px]">


                <div className="w-full flex items-center justify-between pt-6">

                    <div className="text-2xl font-bold">
                        Bandage
                    </div>

                    <Menu />
                </div>



                <div className="mt-12 flex flex-col items-center gap-6">

                    <a className="text-2xl text-[#737373]">
                        Home
                    </a>

                    <a className="text-2xl text-[#737373]">
                        Shop
                    </a>

                    <Link
  className="text-2xl text-[#737373]"
  to="/aboutus"
>
  About
</Link>

                    <a className="text-2xl text-[#737373]">
                        Blog
                    </a>

                    <a className="text-2xl text-[#737373]">
                        Contact
                    </a>

                    <a className="text-2xl text-[#737373]">
                        Pages
                    </a>



                    <div className="relative">
                        <div
                            className="flex items-center gap-1 font-bold cursor-pointer"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        >
                            <User2Icon />
                            <span>{user.name}</span>
                            <ChevronDown size={16} />
                        </div>

                        {isUserMenuOpen && (
                            <div className="absolute right-0 top-8 z-50 bg-white shadow-lg w-48 p-4">
                                <Link to="/previous-orders">
                                    Previous Orders
                                </Link>
                            </div>
                        )}
                    </div>



                    <div className="flex flex-col items-center gap-5 text-[#23A6F0] mt-1">

                        <Search />

                        <ShoppingCart />

                        <Heart />

                    </div>

                </div>

            </div>
        </>
    );
}

export default Navbar;