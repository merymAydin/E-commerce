import { api } from "../../api/axiosInstance";
import { toast } from "react-toastify";



export const fetchProduct = (productId) =>{
  return async(dispatch) =>{
    try {
      const response = await api.get(`/products/${productId}`);
      dispatch({
        type: "SET_PRODUCT",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch products. Please try again."
      );
      console.log(error);
      return null;
    }
  }
}