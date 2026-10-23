import { api } from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/users/login", credentials);
      dispatch(setUser(response.data));

      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
      );
      console.log(error);
      return null;
    }
  };
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

export const setCreditCards = (creditCards) => ({
  type: "SET_CREDITCARDS",
  payload: creditCards,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/roles");

      dispatch({
        type: "SET_ROLES",
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch roles. Please try again.",
      );
      console.log(error);
      return null;
    }
  };
};

export const verifyUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await api.get("/users/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(setUser(response.data));

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          api.defaults.headers.common.Authorization =
            `Bearer ${response.data.token}`;
        }

        return response.data;
      }

      return null;

    } catch (error) {
      if (
        error.response?.status === 401 ||
        error.response?.status === 403
      ) {
        localStorage.removeItem("token");
        delete api.defaults.headers.common.Authorization;
      }

      console.error(
        "Verify user failed:",
        error.response?.data || error
      );

      return null;
    }
  };
};