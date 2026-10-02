import { useEffect, useState } from "react";
import { api } from "../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateOrderPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });
  const [cardForm, setCardForm] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });
  const [orderCompleted, setOrderCompleted] = useState(false);

  const total = cart
    .filter((item) => item.checked)
    .reduce((total, item) => {
      return total + item.product.price * item.count;
    }, 0);

    const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleCardChange = (e) => {
    setCardForm({
      ...cardForm,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
    });
  };

  const resetCardForm = () => {
    setCardForm({
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    });
  };

  const handleAddAddress = () => {
    setEditingAddress(null);
    resetForm();
    setShowAddressForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAddress) {
        const response = await api.put("/user/address", {
          id: editingAddress.id,
          ...formData,
        });

        setAddresses(
          addresses.map((address) =>
            address.id === editingAddress.id ? response.data : address
          )
        );

        setEditingAddress(null);
         
      } else {
        const response = await api.post("/user/address", formData);
        setAddresses([...addresses, response.data]);
      }

      setShowAddressForm(false);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (addressId) => {
    try {
      await api.delete(`/user/address/${addressId}`);

      setAddresses(
        addresses.filter((address) => address.id !== addressId)
      );

      if (shippingAddress?.id === addressId) {
        setShippingAddress(null);
      }

      if (billingAddress?.id === addressId) {
        setBillingAddress(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditingAddress = (address) => {
    setEditingAddress(address);
    setShowAddressForm(true);

    setFormData({
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
    });
  };

  const handleAddCard = async () => {
    try {
      if (editingCard) {
        const response = await api.put("/user/card", {
          id: editingCard.id,
          ...cardForm,
        });

        setCards(
          cards.map((card) =>
            card.id === editingCard.id ? response.data : card
          )
        );

        setEditingCard(null);
        setShowCardForm(false);
        resetCardForm();
      } else {
        const response = await api.post("/user/card", cardForm);

        setCards([...cards, response.data]);
        setSelectedCard(response.data);
        setShowCardForm(false);
        resetCardForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await api.delete(`/user/card/${cardId}`)
      setCards(cards.filter(c => c.id !== cardId));

      if (selectedCard?.id === cardId) {
        setSelectedCard(null);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setShowCardForm(true);

    setCardForm({
      card_no: card.card_no,
      expire_month: card.expire_month,
      expire_year: card.expire_year,
      name_on_card: card.name_on_card,
    });
  }

  const handleCreateOrder = async () => {

    if (!shippingAddress || !selectedCard) {
        alert("Please select an address and a card.");
        return;
      }
    const products = cart
      .filter((item) => item.checked)
      .map((item) => {
        return {
          product_id: item.product.id,
          count: item.count,
          detail: "",
        };
      });

    const orderData = {
      address_id: shippingAddress?.id,
      order_date: new Date().toISOString(),
      card_no: selectedCard?.card_no,
      card_name: selectedCard?.name_on_card,
      card_expire_month: Number(selectedCard?.expire_month),
      card_expire_year: Number(selectedCard?.expire_year),
      card_ccv: 321,
      price: total,
      products: products,
    };

    try {
      
      const response = await api.post("/order", orderData);
      console.log("ORDER CREATED:", response.data);
      dispatch(setCart([]));
      setOrderCompleted(true);
    } catch (error) {
      console.log(error);
    }
  };





  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/user/address");
        setAddresses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddresses();
    const fetchCards = async () => {
      try {
        const response = await api.get("/user/card");
        setCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };


    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="max-w-[1280px] mx-auto px-5 py-8">
        {orderCompleted ? (
  <div className="bg-white rounded-md p-10 text-center">
    <h2 className="text-2xl font-semibold text-green-600">
      Order Successfully Completed!
    </h2>

    <button
      onClick={() => history.push("/previous-orders")}
      className="mt-6 bg-[#F58220] text-white px-6 py-3 rounded-md"
    >
      View My Orders
    </button>
  </div>
)

        :

        (<div className="grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-6">

          <main>

            <div className="grid grid-cols-2 bg-white border border-gray-200 rounded-md overflow-hidden mb-5">

              <div className="relative px-6 py-5 border-b-4 border-[#F58220]">
                <div className="absolute left-2 top-8 text-[#F58220] text-4xl font-bold">
                  1
                </div>

                <div className="ml-3">
                  <h1 className="text-xl font-semibold text-[#F58220]">
                    Address Information
                  </h1>

                  <p className="text-sm text-gray-500 mt-1">
                    Select your shipping address
                  </p>
                </div>
              </div>


              <div
                onClick={() => setCurrentStep(2)}
                className={`px-6 py-5 cursor-pointer ${currentStep === 2 ? "border-b-4 border-[#F58220]" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-[#F58220]">2</span>
                  <div>
                    <h2 className="text-xl font-semibold text-[#F58220]">Payment Options</h2>
                    <p className="text-sm text-gray-500 mt-1">Choose your payment method</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white border border-gray-200 rounded-md p-5 mb-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F58220] text-white flex items-center justify-center text-sm font-bold">
                  !
                </div>

                <p className="text-sm text-gray-600 leading-5">
                  Please select your shipping and billing address before
                  continuing to payment.
                </p>
              </div>
            </div>
            {currentStep === 1 && (
              <>
                <section className="bg-white border border-gray-200 rounded-md p-5">

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Shipping Address
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Select your delivery address
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddAddress}
                      className="bg-[#F58220] hover:bg-[#e87512] text-white font-medium px-5 py-3 rounded-md transition"
                    >
                      + Add Address
                    </button>
                  </div>

                  {showAddressForm && (
                    <form
                      onSubmit={handleSubmit}
                      className="border border-gray-200 rounded-md p-5 mb-6 bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-5">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {editingAddress
                            ? "Update Address"
                            : "Add New Address"}
                        </h3>

                        <button
                          type="button"
                          onClick={() => {
                            setShowAddressForm(false);
                            setEditingAddress(null);
                            resetForm();
                          }}
                          className="text-sm text-gray-500 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address Title
                          </label>

                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Surname
                          </label>

                          <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>

                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>

                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          >
                            <option value="">Select City</option>
                            <option value="istanbul">Istanbul</option>
                            <option value="ankara">Ankara</option>
                            <option value="izmir">Izmir</option>
                            <option value="bursa">Bursa</option>
                            <option value="antalya">Antalya</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            District
                          </label>

                          <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Neighborhood
                          </label>

                          <input
                            type="text"
                            name="neighborhood"
                            value={formData.neighborhood}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-[#F58220]"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>

                          <textarea
                            rows="3"
                            placeholder="Street, building, apartment, door number..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2.5 resize-none outline-none focus:border-[#F58220]"
                          />
                        </div>

                      </div>

                      <div className="flex justify-end mt-5">
                        <button
                          type="submit"
                          className="bg-[#F58220] hover:bg-[#e87512] text-white font-medium px-6 py-3 rounded-md transition"
                        >
                          {editingAddress
                            ? "Update Address"
                            : "Add Address"}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        onClick={() => setShippingAddress(address)}
                        className={`cursor-pointer rounded-md p-5 border transition ${shippingAddress?.id === address.id
                          ? "border-2 border-[#F58220] bg-orange-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                      >
                        <div className="flex items-start justify-between">

                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${shippingAddress?.id === address.id
                                  ? "border-[#F58220]"
                                  : "border-gray-400"
                                  }`}
                              >
                                {shippingAddress?.id === address.id && (
                                  <span className="w-2 h-2 rounded-full bg-[#F58220]" />
                                )}
                              </span>

                              <span className="font-semibold text-gray-800">
                                {address.title}
                              </span>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-700">
                              {address.name} {address.surname}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.phone}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.city}, {address.district}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.neighborhood}
                            </p>
                          </div>

                          {shippingAddress?.id === address.id && (
                            <span className="text-xs font-medium text-[#F58220]">
                              Selected
                            </span>
                          )}

                        </div>

                        <div className="flex justify-end gap-2 mt-5">

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditingAddress(address);
                            }}
                            className="text-sm underline text-gray-600 hover:text-[#F58220]"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(address.id);
                            }}
                            className="text-sm underline text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>

                        </div>
                      </div>
                    ))}

                  </div>
                </section>

                <section className="bg-white border border-gray-200 rounded-md p-5 mt-6">

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Billing Address
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Select your billing address
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        onClick={() => setBillingAddress(address)}
                        className={`cursor-pointer rounded-md p-5 border transition ${billingAddress?.id === address.id
                          ? "border-2 border-[#F58220] bg-orange-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                      >
                        <div className="flex items-start justify-between">

                          <div>
                            <div className="flex items-center gap-2">

                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${billingAddress?.id === address.id
                                  ? "border-[#F58220]"
                                  : "border-gray-400"
                                  }`}
                              >
                                {billingAddress?.id === address.id && (
                                  <span className="w-2 h-2 rounded-full bg-[#F58220]" />
                                )}
                              </span>

                              <span className="font-semibold text-gray-800">
                                {address.title}
                              </span>

                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-700">
                              {address.name} {address.surname}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.phone}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.city}, {address.district}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                              {address.neighborhood}
                            </p>
                          </div>

                          {billingAddress?.id === address.id && (
                            <span className="text-xs font-medium text-[#F58220]">
                              Selected
                            </span>
                          )}

                        </div>
                      </div>
                    ))}

                  </div>
                </section>
              </>)}


              {currentStep === 2 && (
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <h2 className="text-2xl font-semibold text-gray-800">Payment Options</h2>
              <p className="text-sm text-gray-500 mt-1">Choose your payment method</p>

              <button type="button" onClick={() => setShowCardForm(true)} className="mt-6 bg-[#F58220] hover:bg-[#e87512] text-white font-medium px-5 py-3 rounded-md">
                + Add New Card
              </button>
              {showCardForm && (
                <div>
                  <input
                    type="text"
                    name="card_no"
                    value={cardForm.card_no}
                    onChange={handleCardChange}
                    placeholder="Card Number"
                  />

                  <input
                    type="text"
                    name="expire_month"
                    value={cardForm.expire_month}
                    onChange={handleCardChange}
                    placeholder="Expire Month"
                  />

                  <input
                    type="text"
                    name="expire_year"
                    value={cardForm.expire_year}
                    onChange={handleCardChange}
                    placeholder="Expire Year"
                  />

                  <input
                    type="text"
                    name="name_on_card"
                    value={cardForm.name_on_card}
                    onChange={handleCardChange}
                    placeholder="Name on Card"
                  />
                  <button
                    type="button"
                    onClick={handleAddCard}
                  >
                    Add Card
                  </button>
                </div>
              )}
              {cards.map((card) => {
                return (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className={`p-4 rounded-md cursor-pointer ${selectedCard?.id === card.id
                      ? "border-2 border-[#F58220] bg-orange-50"
                      : "border border-gray-200"
                      }`}
                  >
                    <p>{card.name_on_card}</p>
                    <p>{card.card_no}</p>
                    <p>
                      {card.expire_month}/{card.expire_year}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCard(card.id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditCard(card);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                );
              })}

            </section>
            )}

          </main>

          <aside className="space-y-5">

            <button
              type="button"
              className="w-full bg-[#F58220] hover:bg-[#e87512] text-white font-semibold py-4 rounded-md transition"
              onClick={() => {
  if (!shippingAddress || !billingAddress) {
    alert("Please select your addresses.");
    return;
  }

  setCurrentStep(2);
}}
              
            >
              Save and Continue
            </button>

            <div className="bg-white border border-gray-200 rounded-md p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Products Total</span>
                <span>{total.toFixed(2)} TL</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Shipping</span>
                <span>0.00 TL</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-5">
                <span>Discount</span>
                <span className="text-[#F58220]">-0.00 TL</span>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-semibold text-gray-800">
                  Total
                </span>

                <span className="font-semibold text-[#F58220] text-lg">
                  {total.toFixed(2)} TL
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#F58220] hover:bg-[#e87512] text-white font-semibold py-4 rounded-md transition"
              onClick={handleCreateOrder}
            >
              Save and Continue
            </button>

          </aside>

        </div>)}

      </div >
    </div >
  );
};

export default CreateOrderPage;