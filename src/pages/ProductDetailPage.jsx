import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProduct } from "../store/actions/productActions";
import {
  ChevronRight,
  Eye,
  Heart,
  LoaderCircle,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { api } from "../api/axiosInstance";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../components/ProductCard";
import BrandLogos from "../components/BrandLogos";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.product.product);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProduct(productId));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [dispatch, productId]);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        setLoading(true);

        const response = await api.get("/products");

        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching seller products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerProducts();
  }, []);

  return (
    <>
       
      <div className="max-w-[1050px] mx-auto px-4 md:px-0 flex items-center gap-2 py-6 text-sm">
        <Link to="/" className="font-bold">
          Home
        </Link>

        <ChevronRight size={16} className="text-gray-400" />

        <Link to="/shop" className="text-gray-400">
          Shop
        </Link>
      </div>

       
      <div className="max-w-[1050px] mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-12 md:gap-10 mb-12">
         
        <div className="w-full md:w-1/2">
          {loading ? (
            <LoaderCircle />
          ) : (
            <div className="w-full max-w-[320px] md:max-w-none mx-auto">
              {product?.images?.length > 0 && (
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="w-full h-[150px] md:h-[430px]"
                >
                  {product.images.map((image) => (
                    <SwiperSlide key={image.index}>
                      <img
                        className="w-full h-full object-cover"
                        src={image.url}
                        alt={product.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={10}
                watchSlidesProgress
                className="mt-3"
              >
                {product?.images?.map((image) => (
                  <SwiperSlide key={image.index}>
                    <img
                      src={image.url}
                      alt={product.name}
                      className="w-[56px] h-[56px] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

         
        <div className="w-full md:w-1/2">
          {loading ? (
            <LoaderCircle />
          ) : (
            <div className="max-w-[320px] md:max-w-none mx-auto">
              <h2 className="text-xl font-semibold">
                {product?.name}
              </h2>

               
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z"
                        fill={
                          star <= Math.round(product?.rating)
                            ? "#F3CD03"
                            : "#D9D9D9"
                        }
                      />
                    </svg>
                  ))}
                </div>

                <span className="text-[#737373] font-bold">
                  {product?.rating}
                </span>

                <span className="text-[#737373] font-bold">
                  {product?.reviewCount} reviews
                </span>
              </div>

               
              <p className="text-2xl font-bold mt-4">
                ${product?.price}
              </p>

               
              <p className="mt-2 text-[#737373] font-bold">
                Availability :{" "}
                <span className="text-[#23A6F0]">
                  In Stock
                </span>
              </p>

              <p className="text-xs md:text-sm mt-6 md:mt-8 leading-5 md:leading-6 text-[#858585]">
                {product?.description}
              </p>

              <hr className="my-6" />

               
              <div className="flex items-center gap-2 mt-6">
               <button className="bg-[#23A6F0] text-white font-bold px-4 py-2 rounded text-xs">
                  Select Options
                </button>

                <div className="w-8 h-8 rounded-full border border-[#E0E0E0] flex items-center justify-center">
                  <Heart size={20} />
                </div>

                <div className="w-8 h-8 rounded-full border border-[#E0E0E0] flex items-center justify-center">
                  <ShoppingCart size={20} />
                </div>

                <div className="w-8 h-8 rounded-full border border-[#E0E0E0] flex items-center justify-center">
                  <Eye size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

       
      <section className="max-w-[1050px] mx-auto px-4 md:px-0 mt-16">
        
        <div className="flex justify-center gap-4 md:gap-16 py-4 border-b border-[#E0E0E0] text-xs md:text-sm">
          <button className="font-semibold text-[#252B42]">
            Description
          </button>

          <button className="font-semibold text-[#737373]">
            Additional Information
          </button>

          <button className="font-semibold text-[#737373]">
            Reviews{" "}
            <span className="text-[#23A6F0]">
              (0)
            </span>
          </button>
        </div>

         
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
           
          <div className="flex justify-center md:block">
            <div className="w-[165px] h-[140px] md:w-[316px] md:h-[372px] shadow-[6px_8px_0px_#F2F2F2]">
              <img
                src={product?.images?.[0]?.url}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

           
          <div>
            <h3 className="text-2xl font-bold text-[#252B42] mb-6">
              the quick fox jumps over
            </h3>

            <p className="text-[15px] text-[#737373] leading-[1.45]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do
              met sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
          </div>

           
          <div>
            <h3 className="text-2xl font-bold text-[#252B42] mb-6">
              the quick fox jumps over
            </h3>

            <div className="space-y-4">
              {[
                1,
                2,
                3,
                4,
              ].map((item) => (
                <p
                  key={item}
                  className="text-[15px] font-semibold text-[#737373]"
                >
                  <ChevronRight
                    className="inline mr-3"
                    size={20}
                  />
                  the quick fox jumps over the lazy dog
                </p>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#252B42] mt-8 mb-6">
              the quick fox jumps over
            </h3>

            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <p
                  key={item}
                  className="text-[15px] font-semibold text-[#737373]"
                >
                  <ChevronRight
                    className="inline mr-3"
                    size={20}
                  />
                  the quick fox jumps over the lazy dog
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="bg-[#FAFAFA] mt-16 py-6">
  <div className="max-w-[1050px] mx-auto">
    <h2 className="text-2xl font-bold text-[#252B42] pb-4 border-b border-[#E0E0E0]">
      BESTSELLER PRODUCTS
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8)
        .map((product) => {
          const category = categories.find(
            (category) => category.id === product.category_id
          );

          const gender = category?.code?.startsWith("k")
            ? "kadin"
            : "erkek";

          return (
            <ProductCard
              key={product.id}
              product={product}
              gender={gender}
              categoryId={category?.id}
              categoryName={category?.title}
            />
          );
        })}
    </div>
  </div>
</section>

<BrandLogos />
    </>
  );
};

export default ProductDetailPage;