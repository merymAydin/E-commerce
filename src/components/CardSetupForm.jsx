import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { api } from "../api/axiosInstance";

const CardSetupForm = ({ onCardSaved, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardholderName, setCardholderName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!stripe || !elements || isSaving) return;

    if (!cardholderName.trim()) {
      setError("Please enter the cardholder name.");
      return;
    }

    setIsSaving(true);

    try {
      const response = await api.post("/user/card/setup-intent");
      const { clientSecret } = response.data;

      const result = await stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: cardholderName.trim(),
          },
        },
      });

      if (result.error) {
        setError(result.error.message || "The card could not be saved.");
        return;
      }

      await onCardSaved();
    } catch (requestError) {
      console.error("Card setup failed:", requestError);
      setError(
        requestError.response?.data?.message ||
          "The card could not be saved. Please try again."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Add New Card</h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-gray-500 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        Name on Card
      </label>
      <input
        type="text"
        value={cardholderName}
        onChange={(event) => setCardholderName(event.target.value)}
        autoComplete="cc-name"
        className="mb-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3"
        placeholder="Name as printed on card"
      />

      <label className="mb-2 block text-sm font-medium text-gray-700">
        Card Details
      </label>
      <div className="rounded-md border border-gray-300 bg-white p-4">
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: "16px",
                color: "#374151",
                "::placeholder": { color: "#9ca3af" },
              },
            },
          }}
        />
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || isSaving}
        className="mt-5 rounded-md bg-[#F58220] px-6 py-3 font-semibold text-white disabled:opacity-50"
      >
        {isSaving ? "Saving..." : "Add Card"}
      </button>
    </form>
  );
};

export default CardSetupForm;
