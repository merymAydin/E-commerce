import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { api } from "../api/axiosInstance";

const stripeOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: "inherit",
      "::placeholder": { color: "#aab7c4" },
    },
    invalid: { color: "#dc2626" },
  },
};

function CardPaymentForm({ orderId, savedCards = [], onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState(
    savedCards.length > 0 ? "saved" : "new"
  );
  const [selectedCardId, setSelectedCardId] = useState(
    savedCards[0]?.id || ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || loading) return;

    if (paymentMethod === "saved" && !selectedCardId) {
      setError("Please select a saved card.");
      return;
    }

    if (paymentMethod === "new" && !elements) return;

    setLoading(true);
    setError("");

    try {
      // Saved-card payments use a dedicated backend endpoint. The backend
      // must verify PaymentMethod ownership before creating the PaymentIntent.
      const response =
        paymentMethod === "saved"
          ? await api.post(
              `/payments/payment-intent/${orderId}/saved-card/${selectedCardId}`
            )
          : await api.post(`/payments/payment-intent/${orderId}`);

      const clientSecret = response.data.clientSecret;
      if (!clientSecret) {
        throw new Error("Payment client secret is missing.");
      }

      let confirmation;
      if (paymentMethod === "saved") {
        confirmation = await stripe.confirmCardPayment(clientSecret);
      } else {
        const cardNumberElement = elements.getElement(CardNumberElement);
        if (!cardNumberElement) {
          throw new Error("Card information could not be loaded. Please try again.");
        }

        confirmation = await stripe.confirmCardPayment(clientSecret, {
          payment_method: { card: cardNumberElement },
        });
      }

      if (confirmation.error) {
        throw new Error(confirmation.error.message);
      }

      if (confirmation.paymentIntent?.status === "succeeded") {
        onPaymentSuccess?.();
      } else {
        setError("Payment could not be completed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Payment failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "rounded-md border border-gray-300 bg-white px-4 py-3 transition focus-within:border-[#F58220]";

  return (
    <form onSubmit={handlePayment} className="mt-5 space-y-5 rounded-md border border-gray-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-800">Payment method</h3>
        <div className="flex gap-2 text-sm">
          {savedCards.length > 0 && (
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setPaymentMethod("saved");
                setSelectedCardId(savedCards[0].id);
                setError("");
              }}
              className={paymentMethod === "saved"
                ? "font-semibold text-[#F58220]"
                : "text-gray-500 hover:text-[#F58220]"}
            >
              Saved card
            </button>
          )}
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              setPaymentMethod("new");
              setError("");
            }}
            className={paymentMethod === "new"
              ? "font-semibold text-[#F58220]"
              : "text-gray-500 hover:text-[#F58220]"}
          >
            Use a new card
          </button>
        </div>
      </div>

      {paymentMethod === "saved" && savedCards.length > 0 ? (
        <div className="space-y-3">
          {savedCards.map((card) => (
            <label
              key={card.id}
              className={`flex cursor-pointer items-center justify-between rounded-md border p-4 ${
                selectedCardId === card.id
                  ? "border-[#F58220] bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  name="savedPaymentMethod"
                  value={card.id}
                  checked={selectedCardId === card.id}
                  onChange={() => setSelectedCardId(card.id)}
                  disabled={loading}
                  className="accent-[#F58220]"
                />
                <span>
                  <span className="block font-medium capitalize text-gray-800">
                    {card.brand}
                  </span>
                  <span className="block text-sm text-gray-600">
                    •••• •••• •••• {card.last4}
                  </span>
                  <span className="block text-xs text-gray-500">
                    Expires {card.expMonth}/{card.expYear}
                  </span>
                </span>
              </span>
            </label>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Kart Numarası
            </label>
            <div className={fieldClass}>
              <CardNumberElement options={{ ...stripeOptions, disabled: loading }} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Son Kullanma Tarihi
              </label>
              <div className={fieldClass}>
                <CardExpiryElement options={{ ...stripeOptions, disabled: loading }} />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                CVV
              </label>
              <div className={fieldClass}>
                <CardCvcElement options={{ ...stripeOptions, disabled: loading }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading || (paymentMethod === "saved" && !selectedCardId)}
        className="w-full rounded-md bg-[#F58220] py-3 font-medium text-white transition hover:bg-[#e87512] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default CardPaymentForm;
