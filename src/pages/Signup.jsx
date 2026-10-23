import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { api } from "../api/axiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import { fetchRoles } from "../store/actions/clientActions";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const roles = useSelector((state) => state.roles);

  const selectedRoleId = watch("role_id");
  const selectedRole = roles.find(
    (role) => role.id === Number(selectedRoleId),
  );
  const history = useHistory();
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    const customer = roles.find(
      (role) => role.roleName === "CUSTOMER"
    );

    if (customer) {
      setValue("role_id", customer.id);
    }
  }, [roles, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
  username: data.name,
  email: data.email,
  password: data.password,
  roleId: Number(data.role_id),
};

      const response = await api.post("/users", payload);

      console.log(response);
      toast.warning("You need to click link in email to activate your account!");
      history.goBack();

    } catch (error) {
      toast.error(
  error.response?.data?.message || "Signup failed. Please try again."
);
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center py-16 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[900px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#252B42]">
              Sign Up
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#252B42]">
              Name *
            </label>

            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
            />

            {errors.name && (
              <span className="text-[10px] text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

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
              className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
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
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Password must be at least 8 characters long and contain at least one uppercase letter, lowercase letter, one number, and one special character",
                },
              })}
              className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
            />

            {errors.password && (
              <span className="text-[10px] text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#252B42]">
              Confirm Password *
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
            />

            {errors.confirmPassword && (
              <span className="text-[10px] text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#252B42]">
              Role *
            </label>

            <select
              {...register("role_id")}
              className="w-full h-12 bg-[#F9F9F9] px-4 text-sm text-[#737373] outline-none border border-transparent focus:border-[#23A6F0]"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.roleName}
                </option>
              ))}
            </select>
          </div>

          {selectedRole?.roleName === "STORE" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#252B42]">
                  Store Name *
                </label>

                <input
                  type="text"
                  placeholder="Store Name"
                  {...register("store.name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
                />

                {errors.store?.name && (
                  <span className="text-[10px] text-red-500">
                    {errors.store.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#252B42]">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  placeholder="5XXXXXXXXX"
                  {...register("store.phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^5\d{9}$/,
                      message: "Enter a valid Turkish number (5XXXXXXXXX)",
                    },
                  })}
                  className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
                />

                {errors.store?.phone && (
                  <span className="text-[10px] text-red-500">
                    {errors.store.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#252B42]">
                  Tax No *
                </label>

                <input
                  type="text"
                  placeholder="TXXXXVXXXXXX"
                  {...register("store.tax_no", {
                    required: "Tax no is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Tax ID must be TXXXXVXXXXXX",
                    },
                  })}
                  className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
                />

                {errors.store?.tax_no && (
                  <span className="text-[10px] text-red-500">
                    {errors.store.tax_no.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#252B42]">
                  Bank Account / IBAN *
                </label>

                <input
                  type="text"
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("store.bank_account", {
                    required: "Bank account number is required",
                    pattern: {
                      value: /^TR\d{24}$/,
                      message: "Please enter a valid Turkish IBAN",
                    },
                  })}
                  className="w-full h-12 bg-[#F9F9F9] px-4 text-sm outline-none border border-transparent focus:border-[#23A6F0]"
                />

                {errors.store?.bank_account && (
                  <span className="text-[10px] text-red-500">
                    {errors.store.bank_account.message}
                  </span>
                )}
              </div>
            </>
          )}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#23A6F0] text-white text-sm font-bold rounded-sm hover:bg-[#1d91d0] transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Signup;
