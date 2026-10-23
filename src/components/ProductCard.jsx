import { Link } from "react-router-dom/cjs/react-router-dom.min"


const ProductCard = ({ product, gender, categoryName, categoryId, link }) => {

    const productNameSlug = product.name
    .toLowerCase()
    .replaceAll(" ", "-");

  const productGender = gender || "all";
  const productCategoryName = categoryName || "products";
  const productCategoryId = categoryId || product.categoryId;

  return (

    <Link
      to={
        link ||
        `/shop/${productGender}/${productCategoryName}/${productCategoryId}/${productNameSlug}/${product.id}`
      }
    >
      <div className="cursor-pointer hover:shadow-md flex flex-col w-[239px] overflow-hidden gap-2">
        <img
          className="w-[239px] h-[427px] object-cover"
          src={product.imageUrl}
          alt={product.name}
        />

        <h3 className="font-bold mt-4 px-4">
          {product.name}
        </h3>

        <p className="text-[#737373] font-bold mt-4 text-center">
          {product.description}
        </p>

        <p className="text-[#BDBDBD] mt-4 text-center pb-4">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard


