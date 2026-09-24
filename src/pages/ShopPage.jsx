import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import BrandLogos from "../components/BrandLogos";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

const ShopPage = () => {
const [viewMode, setViewMode] = useState("grid");
const [currentPage, setCurrentPage] = useState(1);
const [loading, setLoading] = useState(false);
const [sort, setSort] = useState("");
const [selectedSort, setSelectedSort] = useState("");
const [filter, setFilter] = useState("");

const { gender, categoryName, categoryId } = useParams();

const dispatch = useDispatch();

const products = useSelector((state) => state.product.products);
console.log("PRODUCTS:", products);
const total = useSelector((state) => state.product.total);

const totalPages = Math.ceil(total / 12);


useEffect(() => {
  async function loadProducts() {
    setLoading(true);

    await dispatch(fetchProducts({
      limit: 12,
      offset: (currentPage - 1) * 12,
      category: categoryId || null,
      sort: sort || undefined,
      filter: filter || undefined,
    }));

    setLoading(false);
  }

  loadProducts();
}, [currentPage, categoryId, sort, filter]);


  return (
    <>


      <section className="hidden md:block bg-[#FAFAFA] py-8">
        <div className="max-w-[1049px] mx-auto">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#252B42]">
              Shop
            </h2>

            <div className="flex items-center gap-3 text-sm font-bold">
              <Link to="/" className="text-[#252B42]">
                Home
              </Link>

              <span className="text-[#BDBDBD]">
                &gt;
              </span>

              <Link to="/shop" className="text-[#BDBDBD]">
                Shop
              </Link>
            </div>
          </div>

          <div className="flex gap-3">

            <Link to="/shop/kadin/tisort/1" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s1}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/kadin/ayakkabi/2" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s2}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/kadin/ceket/3" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s3}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/kadin/elbise/4" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s4}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/kadin/etek/5" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s5}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>



      <section className="md:hidden bg-[#FAFAFA] py-6">
        <div className="flex flex-col items-center">

          <h2 className="text-xl font-bold text-[#252B42]">
            Shop
          </h2>

          <div className="flex items-center gap-3 mt-5 text-[10px] font-bold">
            <Link to="/" className="text-[#252B42]">
              Home
            </Link>

            <span className="text-[#BDBDBD]">
              &gt;
            </span>

            <Link to="/shop" className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-4 px-7">
            <Link to="/shop/men/tshirt/1" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s1}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/women/tshirt/2" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s2}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/kids/tshirt/3" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s3}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/others/tshirt/4" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s4}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>

            <Link to="/shop/others/coats/5" className="relative flex-1 h-[187px]" onClick={() => setCurrentPage(1)}>
              <img
                src={s5}
                alt="Cloths"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">
                  CLOTHS
                </h3>

                <p className="font-bold text-sm mt-2">
                  5 Items
                </p>
              </div>
            </Link>


          </div>
        </div>
      </section>




      <div className="hidden md:grid max-w-[1049px] mx-auto h-[98px] grid-cols-[330px_338px_1fr] items-center">

        <p className="text-sm font-bold text-[#737373]">
          Showing all 12 results
        </p>

        <div className="flex items-center gap-3">

          <span className="text-sm font-bold text-[#737373]">
            Views:
          </span>

          <button
            onClick={() => setViewMode("grid")}
            className="w-10 h-10 border border-[#E8E8E8] rounded-md flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H4.5C4.89782 0 5.27936 0.158035 5.56066 0.43934C5.84196 0.720644 6 1.10218 6 1.5V4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6H1.5C1.10218 6 0.720644 5.84196 0.43934 5.56066C0.158035 5.27936 0 4.89782 0 4.5V1.5ZM8 1.5C8 1.10218 8.15804 0.720644 8.43934 0.43934C8.72064 0.158035 9.10218 0 9.5 0H12.5C12.8978 0 13.2794 0.158035 13.5607 0.43934C13.842 0.720644 14 1.10218 14 1.5V4.5C14 4.89782 13.842 5.27936 13.5607 5.56066C13.2794 5.84196 12.8978 6 12.5 6H9.5C9.10218 6 8.72064 5.84196 8.43934 5.56066C8.15804 5.27936 8 4.89782 8 4.5V1.5ZM0 9.5C0 9.10218 0.158035 8.72064 0.43934 8.43934C0.720644 8.15804 1.10218 8 1.5 8H4.5C4.89782 8 5.27936 8.15804 5.56066 8.43934C5.84196 8.72064 6 9.10218 6 9.5V12.5C6 12.8978 5.84196 13.2794 5.56066 13.5607C5.27936 13.842 4.89782 14 4.5 14H1.5C1.10218 14 0.720644 13.842 0.43934 13.5607C0.158035 13.2794 0 12.8978 0 12.5V9.5ZM8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H9.5C9.10218 14 8.72064 13.842 8.43934 13.5607C8.15804 13.2794 8 12.8978 8 12.5V9.5Z" fill="#252B42" />
            </svg>

          </button>

          <button
            onClick={() => setViewMode("list")}
            className="w-10 h-10 border border-[#E8E8E8] rounded-md flex items-center justify-center"
          >
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00063 9.50089C4.00063 9.36829 4.05331 9.24111 4.14708 9.14734C4.24085 9.05357 4.36802 9.00089 4.50063 9.00089H13.5006C13.6332 9.00089 13.7604 9.05357 13.8542 9.14734C13.948 9.24111 14.0006 9.36829 14.0006 9.50089C14.0006 9.6335 13.948 9.76068 13.8542 9.85445C13.7604 9.94822 13.6332 10.0009 13.5006 10.0009H4.50063C4.36802 10.0009 4.24085 9.94822 4.14708 9.85445C4.05331 9.76068 4.00063 9.6335 4.00063 9.50089ZM4.00063 5.50089C4.00063 5.36829 4.05331 5.24111 4.14708 5.14734C4.24085 5.05357 4.36802 5.00089 4.50063 5.00089H13.5006C13.6332 5.00089 13.7604 5.05357 13.8542 5.14734C13.948 5.24111 14.0006 5.36829 14.0006 5.50089C14.0006 5.6335 13.948 5.76068 13.8542 5.85445C13.7604 5.94822 13.6332 6.00089 13.5006 6.00089H4.50063C4.36802 6.00089 4.24085 5.94822 4.14708 5.85445C4.05331 5.76068 4.00063 5.6335 4.00063 5.50089ZM4.00063 1.50089C4.00063 1.36829 4.05331 1.24111 4.14708 1.14734C4.24085 1.05357 4.36802 1.00089 4.50063 1.00089H13.5006C13.6332 1.00089 13.7604 1.05357 13.8542 1.14734C13.948 1.24111 14.0006 1.36829 14.0006 1.50089C14.0006 1.6335 13.948 1.76068 13.8542 1.85445C13.7604 1.94822 13.6332 2.00089 13.5006 2.00089H4.50063C4.36802 2.00089 4.24085 1.94822 4.14708 1.85445C4.05331 1.76068 4.00063 1.6335 4.00063 1.50089ZM2.85463 0.146894C2.90119 0.193339 2.93814 0.248515 2.96334 0.30926C2.98855 0.370005 3.00153 0.435127 3.00153 0.500894C3.00153 0.566661 2.98855 0.631782 2.96334 0.692528C2.93814 0.753273 2.90119 0.808448 2.85463 0.854894L1.35463 2.35489C1.30819 2.40146 1.25301 2.4384 1.19227 2.46361C1.13152 2.48881 1.0664 2.50179 1.00063 2.50179C0.934864 2.50179 0.869743 2.48881 0.808998 2.46361C0.748253 2.4384 0.693077 2.40146 0.646632 2.35489L0.146632 1.85489C0.100144 1.80841 0.0632674 1.75322 0.0381083 1.69248C0.0129492 1.63174 6.92724e-10 1.56664 0 1.50089C-6.92724e-10 1.43515 0.0129492 1.37005 0.0381083 1.30931C0.0632674 1.24857 0.100144 1.19338 0.146632 1.14689C0.19312 1.10041 0.248309 1.06353 0.309048 1.03837C0.369788 1.01321 0.434888 1.00026 0.500632 1.00026C0.566375 1.00026 0.631476 1.01321 0.692215 1.03837C0.752954 1.06353 0.808144 1.10041 0.854632 1.14689L1.00063 1.29389L2.14663 0.146894C2.19308 0.100331 2.24825 0.0633878 2.309 0.0381813C2.36974 0.0129749 2.43486 0 2.50063 0C2.5664 0 2.63152 0.0129749 2.69227 0.0381813C2.75301 0.0633878 2.80819 0.100331 2.85463 0.146894ZM2.85463 4.14689C2.90119 4.19334 2.93814 4.24852 2.96334 4.30926C2.98855 4.37001 3.00153 4.43513 3.00153 4.50089C3.00153 4.56666 2.98855 4.63178 2.96334 4.69253C2.93814 4.75327 2.90119 4.80845 2.85463 4.85489L1.35463 6.35489C1.30819 6.40146 1.25301 6.4384 1.19227 6.46361C1.13152 6.48881 1.0664 6.50179 1.00063 6.50179C0.934864 6.50179 0.869743 6.48881 0.808998 6.46361C0.748253 6.4384 0.693077 6.40146 0.646632 6.35489L0.146632 5.85489C0.052745 5.76101 0 5.63367 0 5.50089C0 5.36812 0.052745 5.24078 0.146632 5.14689C0.240518 5.05301 0.367856 5.00026 0.500632 5.00026C0.633407 5.00026 0.760745 5.05301 0.854632 5.14689L1.00063 5.29389L2.14663 4.14689C2.19308 4.10033 2.24825 4.06339 2.309 4.03818C2.36974 4.01297 2.43486 4 2.50063 4C2.5664 4 2.63152 4.01297 2.69227 4.03818C2.75301 4.06339 2.80819 4.10033 2.85463 4.14689ZM2.85463 8.14689C2.90119 8.19334 2.93814 8.24852 2.96334 8.30926C2.98855 8.37001 3.00153 8.43513 3.00153 8.50089C3.00153 8.56666 2.98855 8.63178 2.96334 8.69253C2.93814 8.75327 2.90119 8.80845 2.85463 8.85489L1.35463 10.3549C1.30819 10.4015 1.25301 10.4384 1.19227 10.4636C1.13152 10.4888 1.0664 10.5018 1.00063 10.5018C0.934864 10.5018 0.869743 10.4888 0.808998 10.4636C0.748253 10.4384 0.693077 10.4015 0.646632 10.3549L0.146632 9.85489C0.052745 9.76101 0 9.63367 0 9.50089C0 9.36812 0.052745 9.24078 0.146632 9.14689C0.240518 9.05301 0.367856 9.00026 0.500632 9.00026C0.633407 9.00026 0.760745 9.05301 0.854632 9.14689L1.00063 9.29389L2.14663 8.14689C2.19308 8.10033 2.24825 8.06339 2.309 8.03818C2.36974 8.01297 2.43486 8 2.50063 8C2.5664 8 2.63152 8.01297 2.69227 8.03818C2.75301 8.06339 2.80819 8.10033 2.85463 8.14689Z" fill="#737373" />
            </svg>

          </button>

        </div>

        <div className="flex items-center justify-end gap-3">
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-[140px] h-10 border border-[#E8E8E8] rounded-md text-sm text-[#737373] px-4 outline-none"
          >
            <option value="">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>

          <input
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter"
            className="w-[140px] h-10 border border-[#E8E8E8] rounded-md text-sm text-[#737373] px-4 outline-none"
          />

          <button
            className="w-[80px] h-10 bg-[#23A6F0] rounded-md text-white text-sm font-bold"
            onClick={() => {
              setCurrentPage(1);
              setSort(selectedSort);
            }}
          >
            Filter
          </button>
        </div>

      </div>




      <div className="md:hidden flex flex-col items-center gap-5 py-6">

        <p className="text-[10px] font-bold text-[#737373]">
          Showing all 12 results
        </p>

        <div className="flex items-center gap-3">

          <span className="text-[10px] font-bold text-[#737373]">
            Views:
          </span>

          <button
            onClick={() => setViewMode("grid")}
            className="w-9 h-9 border border-[#E8E8E8] rounded-md flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H4.5C4.89782 0 5.27936 0.158035 5.56066 0.43934C5.84196 0.720644 6 1.10218 6 1.5V4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6H1.5C1.10218 6 0.720644 5.84196 0.43934 5.56066C0.158035 5.27936 0 4.89782 0 4.5V1.5ZM8 1.5C8 1.10218 8.15804 0.720644 8.43934 0.43934C8.72064 0.158035 9.10218 0 9.5 0H12.5C12.8978 0 13.2794 0.158035 13.5607 0.43934C13.842 0.720644 14 1.10218 14 1.5V4.5C14 4.89782 13.842 5.27936 13.5607 5.56066C13.2794 5.84196 12.8978 6 12.5 6H9.5C9.10218 6 8.72064 5.84196 8.43934 5.56066C8.15804 5.27936 8 4.89782 8 4.5V1.5ZM0 9.5C0 9.10218 0.158035 8.72064 0.43934 8.43934C0.720644 8.15804 1.10218 8 1.5 8H4.5C4.89782 8 5.27936 8.15804 5.56066 8.43934C5.84196 8.72064 6 9.10218 6 9.5V12.5C6 12.8978 5.84196 13.2794 5.56066 13.5607C5.27936 13.842 4.89782 14 4.5 14H1.5C1.10218 14 0.720644 13.842 0.43934 13.5607C0.158035 13.2794 0 12.8978 0 12.5V9.5ZM8 9.5C8 9.10218 8.15804 8.72064 8.43934 8.43934C8.72064 8.15804 9.10218 8 9.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H9.5C9.10218 14 8.72064 13.842 8.43934 13.5607C8.15804 13.2794 8 12.8978 8 12.5V9.5Z" fill="#252B42" />
            </svg>

          </button>

          <button
            onClick={() => setViewMode("list")}
            className="w-9 h-9 border border-[#E8E8E8] rounded-md flex items-center justify-center"
          >
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.00063 9.50089C4.00063 9.36829 4.05331 9.24111 4.14708 9.14734C4.24085 9.05357 4.36802 9.00089 4.50063 9.00089H13.5006C13.6332 9.00089 13.7604 9.05357 13.8542 9.14734C13.948 9.24111 14.0006 9.36829 14.0006 9.50089C14.0006 9.6335 13.948 9.76068 13.8542 9.85445C13.7604 9.94822 13.6332 10.0009 13.5006 10.0009H4.50063C4.36802 10.0009 4.24085 9.94822 4.14708 9.85445C4.05331 9.76068 4.00063 9.6335 4.00063 9.50089ZM4.00063 5.50089C4.00063 5.36829 4.05331 5.24111 4.14708 5.14734C4.24085 5.05357 4.36802 5.00089 4.50063 5.00089H13.5006C13.6332 5.00089 13.7604 5.05357 13.8542 5.14734C13.948 5.24111 14.0006 5.36829 14.0006 5.50089C14.0006 5.6335 13.948 5.76068 13.8542 5.85445C13.7604 5.94822 13.6332 6.00089 13.5006 6.00089H4.50063C4.36802 6.00089 4.24085 5.94822 4.14708 5.85445C4.05331 5.76068 4.00063 5.6335 4.00063 5.50089ZM4.00063 1.50089C4.00063 1.36829 4.05331 1.24111 4.14708 1.14734C4.24085 1.05357 4.36802 1.00089 4.50063 1.00089H13.5006C13.6332 1.00089 13.7604 1.05357 13.8542 1.14734C13.948 1.24111 14.0006 1.36829 14.0006 1.50089C14.0006 1.6335 13.948 1.76068 13.8542 1.85445C13.7604 1.94822 13.6332 2.00089 13.5006 2.00089H4.50063C4.36802 2.00089 4.24085 1.94822 4.14708 1.85445C4.05331 1.76068 4.00063 1.6335 4.00063 1.50089Z"
                fill="#737373"
              />
              <circle cx="1.5" cy="1.5" r="1.5" fill="#737373" />
              <circle cx="1.5" cy="5.5" r="1.5" fill="#737373" />
              <circle cx="1.5" cy="9.5" r="1.5" fill="#737373" />
            </svg>
          </button>

        </div>

        <div className="flex items-center gap-[10px]">

          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-[100px] h-9 border border-[#E8E8E8] rounded-md px-3 text-[10px] text-[#737373] outline-none bg-white"
          >
            <option value="">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>

          <button
            onClick={() => setSort(selectedSort)}
            className="w-[67px] h-9 bg-[#23A6F0] rounded-md text-white text-[10px] font-bold"
          >
            Filter
          </button>

        </div>

      </div>



      {loading ? (
        <p className="hidden md:block text-center py-10 text-[#737373]">
          Loading...
        </p>
      ) : (
        <div
          className={`hidden md:flex ${viewMode === "grid"
            ? "flex-wrap justify-center gap-[30px]"
            : "flex-col gap-6"
            } max-w-[1049px] mx-auto`}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              gender={gender}
              categoryName={categoryName}
              categoryId={categoryId}
            />
          ))}
        </div>
      )}




      {loading ? (
        <p className="md:hidden text-center py-10 text-[#737373]">
          Loading...
        </p>
      ) : (
        <div
          className={`md:hidden flex ${viewMode === "grid"
            ? "flex-wrap justify-center gap-6"
            : "flex-col items-center gap-6"
            } px-3`}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}




      <div className="hidden md:flex justify-center mt-12">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="w-[68px] h-[62px] border border-[#E8E8E8] rounded-l-md text-[#BDBDBD]"
        >
          First
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`w-[60px] h-[62px] border-t border-b border-[#E8E8E8] ${currentPage === pageNumber
              ? "bg-[#23A6F0] text-white border-[#23A6F0]"
              : "text-[#23A6F0]"
              }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="w-[75px] h-[62px] border border-[#E8E8E8] rounded-r-md text-[#23A6F0]"
        >
          Next
        </button>

      </div>




      <div className="md:hidden flex justify-center mt-10">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="w-[48px] h-[40px] border border-[#E8E8E8] rounded-l-md text-[9px] text-[#BDBDBD]"
        >
          First
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`w-[36px] h-[40px] border-t border-b border-[#E8E8E8] ${currentPage === pageNumber
              ? "bg-[#23A6F0] text-white border-[#23A6F0]"
              : "text-[#23A6F0]"
              }`}
          >
            {pageNumber}
          </button>
        ))}


        <button
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="w-[48px] h-[40px] border border-[#E8E8E8] rounded-r-md text-[9px] text-[#23A6F0]"
        >
          Next
        </button>

      </div>

      <BrandLogos />

    </>
  );
};

export default ShopPage;