import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  loginStart,
  loginSuccess,
  loginFail,
} from "../../store/authSlice/authSlice";
import { login as apiLogin } from "../../api/api";
import Spinner from "../Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      dispatch(loginStart());
      const response = await apiLogin(data.email, data.password);
      dispatch(loginSuccess(response.token));
      router.push("/launches");
    } catch (error: any) {
      dispatch(loginFail(error.message));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`border border-gray-400 p-2  mb-4 w-full ${
          errors.email ? "border-red-500 " : ""
        }`}
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />

      {errors.email && "Email is required"}

      <input
        className={`border border-gray-400 p-2  mb-4 w-full ${
          errors.email ? "border-red-500 " : ""
        }`}
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />

      {errors.password && "Password is required"}

      {error && <p className="text-red-500">{error}</p>}

      <button className="bg-black border text-white font-medium py-2 px-4 w-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
