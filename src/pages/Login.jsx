import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/clientActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { rememberMe, ...credentials } = data;
      const result = await dispatch(loginUser(credentials, rememberMe));
      if (result) {
        if (rememberMe) {
          localStorage.setItem("token", result.token);
        }
        history.push(location.state?.from || "/create-order");
      }
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className="w-full flex justify-center py-16 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[600px] flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-[#252B42] mb-2">
          Login
        </h2>


        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#252B42]">
            Email address *
          </label>

          <input
            type="email"
            placeholder="Email *"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            className="w-full h-12 bg-[#F9F9F9] px-4 text-sm text-[#252B42] outline-none border border-transparent focus:border-[#23A6F0]"
          />

          {errors.email ? (
            <span className="text-[10px] text-red-500">
              {errors.email.message}
            </span>
          ) : (
            <span className="text-[10px] text-[#737373]">
              We'll never share your email with anyone else.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[#252B42]">
            Password *
          </label>

          <input
            type="password"
            placeholder="Password *"
            {...register("password", {
              required: "password required",
            })}
            className="w-full h-12 bg-[#F9F9F9] px-4 text-sm text-[#252B42] outline-none border border-transparent focus:border-[#23A6F0]"
          />

          {errors.password && (
            <span className="text-[10px] text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-[#737373] cursor-pointer">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="w-4 h-4 accent-[#23A6F0]"
          />
          Remember Me
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-[#23A6F0] text-white text-sm font-bold rounded-sm hover:bg-[#1d91d0] transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login
