import { api } from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/products/${productId}`);
      dispatch({
        type: "SET_PRODUCT",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again.",
      );
      console.log(error);
      return null;
    }
  };
};

export const fetchProducts = (params) => {
  return async (dispatch) => {
    try {
      const response = await api.get("/products", {
        params,
      });

      dispatch({
        type: "SET_PRODUCTS",
        payload: response.data.products,
      });
      dispatch({
        type: "SET_TOTAL",
        payload: response.data.total,
      });

      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again.",
      );
      console.log(error);
      return null;
    }
  };
};

export const fetchCategories = () =>{
  return async(dispatch) =>{
    try {
      const response = await api.get("/categories");
      dispatch({
        type: "SET_CATEGORIES",
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch categories. Please try again."
      );
      console.log(error);
      return null;
    }
  }
}


export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit,
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

