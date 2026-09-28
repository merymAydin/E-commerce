import { useEffect, useState } from "react";
import { api } from "../api/axiosInstance";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import heroImage from "../assets/shop-hero-1-product-slide-1.jpg"

import { Link } from "react-router-dom";
import Men from "../assets/men.jpg"
import women from "../assets/women.jpg"
import kids from "../assets/kids.jpg"
import accessories from "../assets/accessories.jpg"

import grL from "../assets/grL.png"
import unique from "../assets/universe.png"
import post1 from "../assets/412d5bc5d51defa7e9522a5eb5f534d0442131b2.jpg"
import post2 from "../assets/f1.jpg"
import post3 from "../assets/f3.jpg"
import Vector from "../assets/Vector.png"
import coolicon from "../assets/Vector.png"
import ProductCard from "../components/ProductCard";


const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get("/products");
            setProducts(response.data.products);
        };

        fetchProducts();
    }, []);


    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="relative w-full h-[520px] md:h-auto">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center text-center gap-4 md:gap-10 z-10 md:top-1/2 md:left-[12%] md:translate-x-0 md:w-auto md:items-start md:text-left md:gap-10">
                            <p className="text-[10px] md:text-4xl text-white">
                                SUMMER 2020
                            </p>

                            <h1 className="text-3xl md:text-7xl max-w-[180px] md:max-w-none font-bold text-white">
                                NEW COLLECTION
                            </h1>

                            <p className="text-sm md:text-2xl max-w-[230px] md:max-w-lg text-white">
                                We know how large objects will act, but things on small scale.
                            </p>

                            <Link
                                to="/shop"
                                className="bg-emerald-500 text-white text-sm md:text-xl font-bold px-8 py-3 md:px-8 md:py-4 w-fit"
                            >
                                SHOP NOW
                            </Link>
                        </div>

                        <img
                            className="absolute inset-0 w-full h-full object-cover object-[47%_center] md:relative md:h-auto md:object-contain"
                            src={heroImage}
                            alt="New collection"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>


            <section className="hidden md:flex bg-[#FAFAFA] h-[800px]">
                <div className="flex flex-col gap-15">

                    <div className="flex flex-col items-center text-center gap-3 pt-20">
                        <h2 className="text-3xl font-bold">
                            EDITOR'S PICK
                        </h2>

                        <p className="text-m text-[#737373] font-bold">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className="flex gap-8 px-50">

                        <div className="relative w-1/2 h-[521px]">
                            <img
                                src={Men}
                                className="w-full h-full object-cover object-[center_45%]"
                                alt="Men"
                            />

                            <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                MEN
                            </div>
                        </div>

                        <div className="flex flex-1 gap-8">

                            <div className="relative w-1/2 h-[521px]">
                                <img
                                    src={women}
                                    className="w-full h-full object-cover"
                                    alt="Women"
                                />

                                <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                    WOMEN
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-1/2">

                                <div className="relative">
                                    <img
                                        src={accessories}
                                        className="w-full h-[250px] object-cover"
                                        alt="Accessories"
                                    />

                                    <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                        ACCESSORIES
                                    </div>
                                </div>

                                <div className="relative">
                                    <img
                                        src={kids}
                                        className="w-full h-[250px] object-cover"
                                        alt="Kids"
                                    />

                                    <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                        KIDS
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex md:hidden bg-[#FAFAFA]">

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col items-center text-center gap-3 pt-20 px-10 py-3">
                        <h2 className="text-3xl font-bold">
                            EDITOR'S PICK
                        </h2>

                        <p className="text-m text-[#737373] w-[260px] text-center">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 px-6">

                        <div className="relative w-3/4 mx-auto h-[360px]">
                            <img
                                src={Men}
                                className="w-full h-full object-cover object-[center_45%]"
                                alt="Men"
                            />

                            <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                MEN
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">

                            <div className="relative w-3/4 mx-auto h-[360px]">
                                <img
                                    src={women}
                                    className="w-full h-full object-cover"
                                    alt="Women"
                                />

                                <div className="absolute bottom-6 left-6 bg-white px-12 py-4 font-bold">
                                    WOMEN
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-3/4 mx-auto overflow-hidden">

                                <div className="relative overflow-hidden">
                                    <img
                                        src={accessories}
                                        className="w-full h-[250px] object-cover scale-150"
                                        alt="Accessories"
                                    />

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-12 py-4 font-bold">
                                        ACCESSORIES
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <img
                                        src={kids}
                                        className="w-full h-[250px] object-cover scale-150"
                                        alt="Kids"
                                    />

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-12 py-4 font-bold">
                                        KIDS
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="hidden md:flex flex-col items-center pt-20 pb-20 gap-15">

                <div className="flex flex-col items-center text-center gap-2">

                    <p className="text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="text-2xl text-[#252B42] font-bold">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>

                </div>

                <div className="flex flex-wrap justify-center gap-[30px] max-w-[1049px]">

                    {products
                        .sort((a, b) => b.sell_count - a.sell_count)
                        .slice(0, 8)
                        .map((p) => (
                            <ProductCard
                                key={p.id}
                                product={p}
                            />
                        ))}

                </div>
            </section>


            <section className="flex md:hidden flex-col items-center gap-10">

                <div className="flex flex-col items-center text-center gap-2 pt-30">

                    <p className="text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="text-2xl text-[#252B42] w-[280px] font-bold text-center">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="text-[#737373] w-[280px] text-center">
                        Problems trying to resolve the conflict between
                    </p>

                </div>

                <div className="flex flex-wrap justify-center max-w-[1049px] gap-[30px]">

                    {products
                        .sort((a, b) => b.sell_count - a.sell_count)
                        .slice(0, 4)
                        .map((p) => (
                            <ProductCard
                                key={p.id}
                                product={p}
                            />
                        ))}

                </div>
            </section>


            <div className="hidden md:block">

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                >

                    <SwiperSlide>
                        <div className="relative w-full h-[709px] mx-auto bg-[#23856D]">

                            <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-auto flex flex-col items-start text-left gap-10 z-10">

                                <h4 className="text-xl text-white">
                                    SUMMER 2020
                                </h4>

                                <h1 className="text-7xl max-w-[600px] font-bold text-white">
                                    Vita Classic Product
                                </h1>

                                <p className="text-2xl max-w-lg text-white">
                                    We know how large objects will act, We know how are objects will act, We know
                                </p>

                                <div className="flex items-center gap-8">

                                    <p className="text-2xl font-bold text-white">
                                        $16.48
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-4 w-fit rounded-lg"
                                    >
                                        ADD TO CART
                                    </Link>

                                </div>
                            </div>

                            <img
                                className="absolute right-[200px] bottom-0 h-full object-contain object-right translate-y-[20%]"
                                src={grL}
                                alt="Vita Classic Product"
                            />

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="relative w-full h-[709px] mx-auto bg-[#23856D]">

                            <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-auto flex flex-col items-start text-left gap-10 z-10">

                                <h4 className="text-xl text-white">
                                    SUMMER 2020
                                </h4>

                                <h1 className="text-7xl max-w-[600px] font-bold text-white">
                                    Vita Classic Product
                                </h1>

                                <p className="text-2xl max-w-lg text-white">
                                    We know how large objects will act, We know how are objects will act, We know
                                </p>

                                <div className="flex items-center gap-8">

                                    <p className="text-2xl font-bold text-white">
                                        $16.48
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-4 w-fit rounded-lg"
                                    >
                                        ADD TO CART
                                    </Link>

                                </div>
                            </div>

                            <img
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[255px] w-auto"
                                src={grL}
                                alt="Vita Classic Product"
                            />

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            <div className="md:hidden bg-[#23856D] h-[1000px]">
                <Swiper
                    className="h-full [&_.swiper-button-prev]:top-[450px] [&_.swiper-button-next]:top-[450px]"
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <div className="relative w-full h-full bg-[#23856D] overflow-hidden">
                            <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center gap-6 z-20">
                                <h4 className="text-[14px] font-bold text-white">
                                    SUMMER 2020
                                </h4>
                                <h1 className="text-[36px] leading-[45px] max-w-[200px] font-bold text-white">
                                    Vita Classic Product
                                </h1>
                                <p className="text-[14px] leading-[20px] max-w-[220px] text-white">
                                    We know how large objects
                                    will act, but things on a
                                    small scale.
                                </p>
                                <p className="text-[20px] font-bold text-white">
                                    $16.48
                                </p>
                                <Link
                                    to="/shop"
                                    className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-3 w-fit rounded-md"
                                >
                                    ADD TO CART
                                </Link>
                            </div>

                            <img
                                className="absolute -bottom-40 left-0 w-full h-auto object-bottom"
                                src={grL}
                                alt="Vita Classic Product"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full h-full bg-[#23856D] overflow-hidden">
                            <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center gap-6 z-20">
                                <h4 className="text-[14px] font-bold text-white">
                                    SUMMER 2020
                                </h4>
                                <h1 className="text-[36px] leading-[45px] max-w-[200px] font-bold text-white">
                                    Vita Classic Product
                                </h1>
                                <p className="text-[14px] leading-[20px] max-w-[220px] text-white">
                                    We know how large objects
                                    will act, but things on a
                                    small scale.
                                </p>
                                <p className="text-[20px] font-bold text-white">
                                    $16.48
                                </p>
                                <Link
                                    to="/shop"
                                    className="bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold px-8 py-3 w-fit rounded-md"
                                >
                                    ADD TO CART
                                </Link>
                            </div>

                            <img
                                className="absolute -bottom-40 left-0 w-full h-auto object-bottom"
                                src={grL}
                                alt="Vita Classic Product"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="hidden md:flex h-[682px]">

                <div className="w-1/2 h-full">
                    <img
                        className="w-full h-full object-cover object-[center_-60px]"
                        src={unique}
                        alt="Unique Collection"
                    />
                </div>

                <div className="w-1/2 flex flex-col justify-center items-start pl-20 gap-6">

                    <h5 className="text-[#BDBDBD]">
                        SUMMER 2020
                    </h5>

                    <h2 className="text-[#252B42] text-4xl font-bold">
                        Part of the Neural
                        <br />
                        Universe
                    </h2>

                    <h4 className="text-[#737373]">
                        We know how large objects will act,
                        <br />
                        but things on a small scale.
                    </h4>

                    <div className="flex gap-3">
                        <Link href="/shop" className="bg-[#2DC071] text-white px-6 py-3 rounded-md">
                            BUY NOW
                        </Link>

                        <Link href="/shop" className="text-[#2DC071] border border-[#2DC071] px-6 py-3 rounded-md">
                            READ MORE
                        </Link>
                    </div>

                </div>

            </div>


            <div className="flex md:hidden flex-col h-[500px]">

                <div className="w-full h-[250px] flex flex-col items-center text-center justify-center gap-4">

                    <h5 className="text-[#BDBDBD] text-[10px]">
                        SUMMER 2020
                    </h5>

                    <h2 className="text-[#252B42] text-[20px] leading-[24px] font-bold w-[220px]">
                        Part of the Neural
                        <br />
                        Universe
                    </h2>

                    <h4 className="text-[#737373] text-[11px] leading-[16px] w-[190px]">
                        We know how large
                        <br />
                        objects will act, but
                        <br />
                        things on a small scale.
                    </h4>

                    <div className="flex flex-col gap-3">

                        <Link href="/shop" className="bg-[#23A6F0] text-white text-[9px] font-bold px-8 py-3 rounded-md">
                            BUY NOW
                        </Link>

                        <Link href="/shop" className="text-[#23A6F0] border border-[#23A6F0] text-[9px] font-bold px-8 py-3 rounded-md">
                            Learn More
                        </Link>

                    </div>

                </div>

                <div className="w-full h-[250px] overflow-hidden">
                    <img
                        className="w-full h-full object-contain object-bottom"
                        src={unique}
                        alt="Unique Collection"
                    />
                </div>

            </div>



            <section className="hidden md:flex flex-col items-center py-20">

                <div className="flex flex-col items-center text-center gap-2 mb-10">

                    <p className="text-[#23A6F0] text-[10px] font-bold">
                        Practice Advice
                    </p>

                    <h2 className="text-[#252B42] text-2xl font-bold">
                        Featured Posts
                    </h2>

                    <p className="text-[#737373] text-[10px] max-w-[400px]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>

                </div>

                <div className="flex gap-1">

                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post1}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>


                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post2}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>


                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post3}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[12px] h-[12px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>

                </div>

            </section>
            <section className="flex md:hidden flex-col items-center py-16">

                <div className="flex flex-col items-center text-center gap-2 mb-8">

                    <p className="text-[#23A6F0] text-[8px] font-bold">
                        Practice Advice
                    </p>

                    <h2 className="text-[#252B42] text-[20px] leading-[24px] font-bold">
                        Featured Posts
                    </h2>

                    <p className="text-[#737373] text-[8px] leading-[12px] w-[250px]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>

                </div>

                <div className="flex flex-col gap-2">

                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post1}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>


                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post2}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>


                    <div className="w-[300px] border border-[#E8E8E8] shadow-sm">

                        <div className="relative h-[180px]">
                            <img
                                src={post3}
                                alt="Featured post"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-[9px] font-bold px-2 py-1">
                                NEW
                            </span>
                        </div>

                        <div className="flex flex-col gap-3 p-3">

                            <p className="text-[9px] text-[#8EC2F2]">
                                Google&nbsp;&nbsp;&nbsp; Trending&nbsp;&nbsp;&nbsp; New
                            </p>

                            <h3 className="text-[#252B42] text-[13px] font-bold">
                                Loudest à la Madison #1
                                <br />
                                (L'integral)
                            </h3>

                            <p className="text-[#737373] text-[9px] leading-4">
                                We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className="flex justify-between text-[8px] text-[#737373]">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={coolicon}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    22 April 2021
                                </span>

                                <span className="flex items-center gap-1">
                                    <img
                                        src={Vector}
                                        alt=""
                                        className="w-[10px] h-[10px]"
                                    />
                                    10 comments
                                </span>

                            </div>

                            <button className="text-[#737373] text-[9px] font-bold text-left">
                                Learn More →
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default HomePage