import { useForm, SubmitHandler } from "react-hook-form";
import { ModalsHooks } from "../../../services/hooks/modals";
import { LoadingModal } from "../../modals/loading";
import { LessonPlanerApi } from "../../../services/api/lessonPlaner";
import ErrorModal from "../../modals/error";
import ConlcludeModal from "../../modals/conclude";

type Inputs = {
	title: string;
	topico: string;
	objetivo: string;
};

export default function LesosonPlanForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const {
		loading,
		errorMessage,
		setErrorMessage,
		setLoading,
		conclude,
		setConclude,
	} = ModalsHooks();

	const lessonPlanerApi = new LessonPlanerApi();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setLoading(true);

		const { title, topico, objetivo } = data;

		try {
			const dataFetch = await lessonPlanerApi.createLesson({
				title,
				topico,
				objetivo,
			});

			if (dataFetch) {
				setLoading(false);
				setConclude("Parabéns, sua tarefa foi concluída com sucesso!");
			}
		} catch {
			setLoading(false);
			setErrorMessage(`O servidor está temporariamente indisponível`);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center p-6"
			>
				<p className="text-black mb-6 font-normal text-2xl">
					Preencha os campos e gere o plano perfeito para você!
				</p>

				<div className="mb-6 w-[550px]">
					<label
						className="block text-sm font-medium text-gray-700"
						htmlFor="title"
					>
						Escreva o título
					</label>
					<input
						id="title"
						type="text"
						placeholder="Javascript"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("title", { required: true })}
					/>
					{errors.title && (
						<span className="text-red-500 text-xs mt-1">
							Título é obrigatório
						</span>
					)}
				</div>

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
						placeholder="Função map"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("topico", { required: true })}
					/>
					{errors.topico && (
						<span className="text-red-500 text-xs mt-1">
							Tópico é obrigatório
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
						placeholder="Aprender de forma simples e eficaz"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("objetivo", { required: true })}
					/>
					{errors.objetivo && (
						<span className="text-red-500 text-xs mt-1">
							Objetivo é obrigatório
						</span>
					)}
				</div>

				<input
					type="submit"
					value="Gerar Plano"
					className="w-[150px] bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all duration-200 cursor-pointer shadow-md"
				/>
			</form>

			{loading && <LoadingModal loading={loading} />}
			{conclude && (
				<ConlcludeModal
					message={conclude}
					onClose={() => setConclude("")}
				/>
			)}
			{errorMessage && (
				<ErrorModal
					message={errorMessage}
					onClose={() => setErrorMessage("")}
				/>
			)}
		</>
	);
}
