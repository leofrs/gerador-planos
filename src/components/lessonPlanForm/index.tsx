import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  topico: string;
  subTopico: string;
  duration: string;
  nivel: number;
  objetivo: string;
};

export default function LesosonPlanForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center p-6 "
    >
      <p className="text-black mb-6 font-normal text-2xl">
        Preencha os campos abaixo e veja a "mágica" acontecer
      </p>

      <div className="mb-6 w-[550px]">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="topico"
        >
          Escreva o tópico
        </label>
        <input
          id="topico"
          type="text"
          placeholder="Programação"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
          {...register("topico", { required: true })}
        />
        {errors.topico && (
          <span className="text-red-500 text-xs mt-1">
            Topico é obrigatório
          </span>
        )}
      </div>

      <div className="mb-6 w-[550px]">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="subTopico"
        >
          Escreva o sub-topico
        </label>
        <input
          id="subTopico"
          type="text"
          placeholder="callback hell"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
          {...register("subTopico", { required: true })}
        />
        {errors.subTopico && (
          <span className="text-red-500 text-xs mt-1">
            Sub-Topico é obrigatório
          </span>
        )}
      </div>

      <div className="mb-6 w-[550px]">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="duration"
        >
          Qual a duração(em minutos)
        </label>
        <input
          id="duration"
          type="number"
          placeholder="25"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
          {...register("duration", { required: true })}
        />
        {errors.duration && (
          <span className="text-red-500 text-xs mt-1">
            Sub-Topico é obrigatório
          </span>
        )}
      </div>

      <div className="mb-6 w-[550px]">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="nivel"
        >
          Qual o nivel
        </label>
        <input
          id="nivel"
          type="text"
          placeholder="intermédiario"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
          {...register("nivel", { required: true })}
        />
        {errors.nivel && (
          <span className="text-red-500 text-xs mt-1">nivel é obrigatório</span>
        )}
      </div>

      <div className="mb-6 w-[550px]">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="objetivo"
        >
          Qual o objetivo
        </label>
        <input
          id="objetivo"
          type="text"
          placeholder="test@test.com"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
          {...register("objetivo", { required: true })}
        />
        {errors.objetivo && (
          <span className="text-red-500 text-xs mt-1">nivel é obrigatório</span>
        )}
      </div>

      <input
        type="submit"
        value="Gerar Plano"
        className="w-[150px] bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all duration-200 cursor-pointer shadow-md"
      />
    </form>
  );
}
