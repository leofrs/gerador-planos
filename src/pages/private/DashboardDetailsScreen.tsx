import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { LessonPlanerApi } from "../../services/api/lessonPlaner";
import Accordion from "../../components/accordion";

type Lesson = {
	_id: number;
	title: string;
	topico: string;
	objetivo: number;
	model: string;
};

const DashboardDetails = () => {
	const { id } = useParams();
	const [task, setTask] = useState<Lesson | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const lessonPlanerApi = new LessonPlanerApi();
		const fetchLesson = async () => {
			try {
				const data: Lesson[] = await lessonPlanerApi.getLesson();
				if (data) {
					const foundTask = data.find(
						(lesson) => lesson._id.toString() === id
					);
					setTask(foundTask || null);
					console.log(foundTask);
				} else {
					setError("Nenhuma lição encontrada");
				}
			} catch (err) {
				setError(`Não encontrado: ${err}`);
			} finally {
				setLoading(false);
			}
		};

		fetchLesson();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!task) return <div>Tarefa não encontrada</div>;

	return (
		<>
			<Navbar />
			<section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white mt-8 flex flex-col gap-8">
				<div className="border-b border-gray-200" key={task._id}>
					<div className="flex flex-col gap-4 w-full py-3 text-left text-textThird font-medium bg-bgSecondary rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 px-5">
						<h2 className="text-2xl font-semibold uppercase">
							{task.title}
						</h2>
						<div className="flex gap-8">
							<p>⏲️ min</p>
							<p>📖 {task.topico}</p>
							<p>👤 fácil</p>
						</div>
					</div>
				</div>
				<Accordion
					_id={task._id}
					topico={task.topico}
					objetivo={task.objetivo}
					content={task.model}
				/>
			</section>
		</>
	);
};

export default DashboardDetails;
