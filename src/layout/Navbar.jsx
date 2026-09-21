import { ChevronDown, Heart, Menu, Search, ShoppingCart, User2Icon } from "lucide-react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/actions/clientActions";
import { Link } from "react-router-dom";



function Navbar() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const womenCategories = categories.filter(c => c.gender === "k");
    const menCategories = categories.filter(c => c.gender === "e");
    const [isOpen, setIsOpen] = useState(false);

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
                    <a>About</a>
                    <a>Contact</a>
                    <a>Pages</a>
                </div>


                <div className="flex items-center gap-5 text-cyan-500 right-[10%] px-10 ml-auto">
                    <div className="flex items-center gap-1 font-bold">
                        <User2Icon />
                        <a href="#">login</a>
                        /
                        <a href="#">Register</a>
                    </div>

                    <Search />
                    <ShoppingCart />
                    <Heart />
                </div>

            </div>



            <div className="flex md:hidden flex-col items-center px-6 h-[460px]">

                <div className="w-full flex items-center justify-between pt-6">

                    <div className="text-2xl font-bold">
                        Bandage
                    </div>

                    <div className="flex items-center gap-3">
                        <Search />
                        <ShoppingCart />
                        <Menu />
                    </div>

                </div>


                <div className="mt-16 flex flex-col items-center justify-between gap-8">
                    <a className="text-2xl text-[#737373]">Home</a>
                    <a className="text-2xl text-[#737373]">Product</a>
                    <a className="text-2xl text-[#737373]">Pricing</a>
                    <a className="text-2xl text-[#737373]">Contact</a>
                </div>


            </div>




        </>
    )
}

export default Navbar
