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
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Senhas não correspondem");
      return;
    }

    localStorage.setItem("usuario", email);
    setEmail(email);
    navigate("/auth/user/Home");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center p-6 gap-8"
      >
        <h4 className="text-black mb-6 font-normal text-3xl">Faça o login</h4>

        <div className=" w-[350px]">
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              E-mail é obrigatório
            </span>
          )}
        </div>

        <div className=" w-[350px] relative ">
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
            {...register("password", {
              required: true,
            })}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-8 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-500 hover:text-blue-600 transition duration-200"
          >
            {showPassword ? "🙈" : "👀"}
          </button>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              Senha é obrigatória
            </span>
          )}
        </div>

        <div className=" w-[350px] relative">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirmar Senha
          </label>
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="******"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute top-8 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-500 hover:text-blue-600 transition duration-200"
          >
            {showConfirmPassword ? "🙈" : "👀"}
          </button>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs mt-1">
              Confirmar senha é obrigatório
            </span>
          )}
        </div>

        <input
          type="submit"
          value="Entrar"
          className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all duration-200 cursor-pointer shadow-md"
        />
      </form>
    </>
  );
}
