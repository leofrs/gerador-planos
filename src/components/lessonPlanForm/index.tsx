import { useForm, SubmitHandler } from "react-hook-form";
import { ModalsHooks } from "../../hooks/modals";
import { ProgressBar } from "../modals/loading";

import { LessonPlanerApi } from "../../api/lessonPlaner";
import ErrorModal from "../modals/error";

type Inputs = {
  topic: string;
  subTopic: string;
  duration: string;
  studentLevel: string;
  objecive: string;
};

export default function LesosonPlanForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const {
    loading,
    handleStartLoading,
    errorMessage,
    setErrorMessage,
    setLoading,
  } = ModalsHooks();

  const lessonPlanerApi = new LessonPlanerApi();

  const email = "admin@admin.com";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    handleStartLoading();
    setErrorMessage("");

    const { topic, subTopic, duration, studentLevel, objecive } = data;

    const durationNumber = Number(duration);

    const dataFetch = await lessonPlanerApi.createLesson({
      topic,
      subTopic,
      duration: durationNumber,
      studentLevel,
      objecive,
      email,
    });

    if (dataFetch.dataFetchError) {
      setLoading(false);
      setErrorMessage(dataFetch.dataFetchError);
    }
  };

  return (
    <>
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
            {...register("topic", { required: true })}
          />
          {errors.topic && (
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
            {...register("subTopic", { required: true })}
          />
          {errors.subTopic && (
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
            {...register("studentLevel", { required: true })}
          />
          {errors.studentLevel && (
            <span className="text-red-500 text-xs mt-1">
              nivel é obrigatório
            </span>
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
            {...register("objecive", { required: true })}
          />
          {errors.objecive && (
            <span className="text-red-500 text-xs mt-1">
              nivel é obrigatório
            </span>
          )}
        </div>

        <input
          type="submit"
          value="Gerar Plano"
          className="w-[150px] bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all duration-200 cursor-pointer shadow-md"
        />
      </form>
      {loading && <ProgressBar />}
      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorMessage("")}
        />
      )}
    </>
  );
}
