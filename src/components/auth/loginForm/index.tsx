import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../../context/user";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { setEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setEmail(data.email);
    console.log(data);
    navigate("/auth/user/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 w-[350px] ">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="test@test.com"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
          {...register("email", { required: true })}
        />
        {errors.email && <span>E-mail é obrigatória</span>}
      </div>

      <div className="mb-4 w-[350px] relative">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
          {...register("password", { required: true })}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5  cursor-pointer "
        >
          {showPassword ? "🙈" : "👀"}
        </button>
        {errors.password && <span>Senha é obrigatória</span>}
      </div>

      <div className="mb-4 w-[350px] relative">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="confirmPassword"
        >
          Confirmar Senha
        </label>
        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="******"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
          {...register("confirmPassword", { required: true })}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5  cursor-pointer "
        >
          {showPassword ? "🙈" : "👀"}
        </button>
        {errors.password && <span>Senha é obrigatória</span>}
      </div>

      <input
        type="submit"
        value="Entrar"
        className="w-full bg-bgPrimary text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition cursor-pointer"
      />
    </form>
  );
}
