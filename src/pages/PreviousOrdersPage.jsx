import { useEffect, useState } from "react"
import { api } from "../api/axiosInstance";


const PreviousOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get("/order");
                setOrders(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders();
    }, [])
    return (
        <div>
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="border border-gray-200 rounded-lg p-5 mb-4"
                >
                    <div className="flex justify-between">
                        <p>Order #{order.id}</p>
                        <p>{order.price} TL</p>
                    </div>

                    <p className="text-sm text-gray-500">
                        {new Date(order.order_date).toLocaleDateString()}
                    </p>
                    {order.products.map((product) => (
                        <div key={product.id} className="flex items-center gap-3">
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-16 h-16 object-contain"
                            />
                            <span>{product.name}</span>
                            <span>x{product.count}</span>
                            <span className="ml-4 text-[#F58220] font-medium">
  {product.price} TL
</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PreviousOrdersPage
