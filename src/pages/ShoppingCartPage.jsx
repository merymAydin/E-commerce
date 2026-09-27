import { useDispatch, useSelector } from "react-redux";
import { toggleCartItem } from "../store/actions/shoppingCartActions";
import { increaseCartItem } from "../store/actions/shoppingCartActions";
import { decreaseCartItem } from "../store/actions/shoppingCartActions";
import { removeCartItem } from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
    const cart = useSelector((state) => state.shoppingCart.cart);

    const dispatch = useDispatch();

    const total = cart
        .filter((item) => item.checked)
        .reduce(
            (total, item) => total + item.product.price * item.count,
            0
        );

    const shipping = 29.99;
    const discount = 29.99;
    const grandTotal = total + shipping - discount;

    return (
        <div className="flex gap-8 items-start">

            <div className="flex-1">
                {cart.map((item) => {
                    return (
                        <div
                            key={item.product.id}
                            className="flex items-center gap-6 px-8 py-6 bg-white border-b border-gray-200"
                        >
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() =>
                                    dispatch(toggleCartItem(item.product.id))
                                }
                                className="w-5 h-5 accent-[#6439B8]"
                            />

                            <img
                                src={item.product.images[0].url}
                                alt={item.product.name}
                                className="w-[82px] h-[82px] object-contain border border-gray-200 rounded-lg"
                            />

                            <div className="flex-1">
                                <p className="text-base text-[#252B42]">
                                    {item.product.name}
                                </p>

                                <div className="flex items-center gap-4 mt-5">
                                    <button
                                        className="w-8 h-8 bg-gray-100 rounded-md"
                                        onClick={() =>
                                            dispatch(
                                                decreaseCartItem(item.product.id)
                                            )
                                        }
                                    >
                                        −
                                    </button>

                                    <span>{item.count}</span>

                                    <button
                                        className="w-8 h-8 bg-gray-100 rounded-md"
                                        onClick={() =>
                                            dispatch(
                                                increaseCartItem(item.product.id)
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                    <button
                                        className="ml-2 text-gray-500"
                                        onClick={() =>
                                            dispatch(
                                                removeCartItem(item.product.id)
                                            )
                                        }
                                    >
                                        🗑
                                    </button>
                                </div>
                            </div>

                            <div className="text-lg font-semibold text-[#252B42]">
                                {item.product.price} TL
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="w-[320px] bg-white border border-gray-200 rounded-lg p-6">

                <Link
                    to="/create-order"
                    className="w-full bg-[#F58220] text-white py-3 rounded-md font-semibold text-center block"
                >
                    Approve Cart →
                </Link>

                <div className="border border-gray-200 rounded-lg p-4 mt-3">

                    <h2 className="text-lg text-[#252B42] mb-5">
                        Order Summary
                    </h2>

                    <div className="flex justify-between mb-3 text-sm">
                        <span className="text-[#737373]">
                            Products Total
                        </span>
                        <span>
                            {total.toFixed(2)} TL
                        </span>
                    </div>

                    <div className="flex justify-between mb-3 text-sm">
                        <span className="text-[#737373]">
                            Shipping
                        </span>
                        <span>
                            {shipping.toFixed(2)} TL
                        </span>
                    </div>

                    <div className="flex justify-between mb-3 text-sm">
                        <span className="text-[#737373]">
                            Discount
                        </span>
                        <span className="text-[#F58220]">
                            -{discount.toFixed(2)} TL
                        </span>
                    </div>

                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                        <span className="text-sm text-[#737373]">
                            Grand Total
                        </span>

                        <span className="font-semibold text-[#F58220]">
                            {grandTotal.toFixed(2)} TL
                        </span>
                    </div>

                </div>

                <button
                    className="w-full mt-3 border border-gray-200 text-[#737373] py-3 rounded-md text-sm"
                >
                    ＋ Enter Discount Code
                </button>

                <Link
                    to="/create-order"
                    className="w-full bg-[#F58220] text-white py-3 rounded-md font-semibold text-center block"
                >
                    Approve Cart →
                </Link>

            </div>


        </div>
    );
};

export default ShoppingCartPage;