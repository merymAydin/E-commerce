import { useEffect, useState } from "react"
import { api } from "../api/axiosInstance";


const PreviousOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get("/orders");
                setOrders(response.data)
            } catch (error) {
                console.error("Orders could not be loaded:", error.response?.data || error);
                setError(error.response?.data?.message || "Orders could not be loaded.");
            }
        }
        fetchOrders();
    }, [])
    return (
        <main className="min-h-[60vh] bg-[#FAFAFA] px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-2xl font-bold text-[#252B42]">
                    Previous Orders
                </h1>

                {error ? (
                    <div role="alert" className="rounded-lg border border-red-200 bg-white p-6 text-red-600">
                        {error}
                    </div>
                ) : orders.length === 0 ? (
                    <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-[#737373]">
                        You have no previous orders.
                    </div>
                ) : (
                    <div className="space-y-5">
                        {orders.map((order) => {
                            const orderTotal = (order.orderItems || []).reduce(
                                (total, item) =>
                                    total + Number(item.unitPrice) * item.quantity,
                                0
                            );

                            return (
                                <section
                                    key={order.id}
                                    className="rounded-lg border border-gray-200 bg-white p-6"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 pb-4">
                                        <div>
                                            <h2 className="font-semibold text-[#252B42]">
                                                Order #{order.id}
                                            </h2>
                                            <p className="mt-1 text-sm text-[#737373]">
                                                {order.createdAt
                                                    ? new Date(order.createdAt).toLocaleDateString()
                                                    : "Date unavailable"}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-bold text-[#F58220]">
                                                {orderTotal.toFixed(2)} TL
                                            </p>
                                            <p className="mt-1 text-sm text-[#737373]">
                                                {order.status}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-3">
                                        {(order.orderItems || []).map((item, index) => (
                                            <div
                                                key={`${order.id}-${item.productId}-${index}`}
                                                className="flex flex-wrap items-center justify-between gap-3"
                                            >
                                                <div>
                                                    <p className="font-medium text-[#252B42]">
                                                        Product #{item.productId}
                                                    </p>
                                                    <p className="text-sm text-[#737373]">
                                                        Quantity: {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-medium text-[#F58220]">
                                                    {(Number(item.unitPrice) * item.quantity).toFixed(2)} TL
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-[#737373]">
                                        <p>
                                            Shipping address: {order.shippingAddress}
                                        </p>
                                        <p>
                                            {[
                                                order.shippingDistrict,
                                                order.shippingCity,
                                                order.shippingPostalCode,
                                            ].filter(Boolean).join(", ")}
                                        </p>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}

export default PreviousOrdersPage
