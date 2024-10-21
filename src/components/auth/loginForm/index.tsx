import { useForm, SubmitHandler } from "react-hook-form";

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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          {...register("email", { required: true })}
        />
        {errors.email && <span>E-mail é obrigatoria</span>}
      </div>

      <div className="mb-4 w-[350px] ">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          id="password"
          type="password"
          placeholder="******"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Senha é obrigatoria</span>}
      </div>

      <div className="mb-4 w-[350px] ">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="confirmPassword"
        >
          Confirmar Senha
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="******"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span>Senhas devem ser iguais</span>}
      </div>

      <input
        type="submit"
        value="Entrar"
        className="w-full bg-bgPrimary text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition cursor-pointer"
      />
    </form>
  );
}
