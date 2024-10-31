import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LessonPlanerApi } from "../../../services/api/lessonPlaner";

const PlanosCriadosCard = () => {
	const navigate = useNavigate();

	const [planos, setPlanos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const handleCardClick = (id: number) => {
		navigate(`/auth/user/home/details/${id}`);
	};

	useEffect(() => {
		const lessonPlanerApi = new LessonPlanerApi();
		console.log(lessonPlanerApi.getLesson());

		const fetchLessons = async () => {
			try {
				const data = await lessonPlanerApi.getLesson();
				setPlanos(data);
			} catch {
				setError("O servidor está temporariamente indisponível");
			} finally {
				setLoading(false);
			}
		};

		fetchLessons();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error)
		return <p className="text-red-600 font-semibold">Error: {error}</p>;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{planos.map((lesson) => {
				const { _id, title, topico } = lesson;
				return (
					<div
						className="rounded-xl border shadow text-center hover:shadow-bgSecondary hover:border-bgSecondary transition-shadow cursor-pointer"
						key={_id}
						onClick={() => handleCardClick(_id)}
					>
						<div className="flex flex-col space-y-1.5 p-6">
							<h3 className="font-semibold leading-none tracking-tight">
								{title}
							</h3>
						</div>

						<div className="p-6 pt-0">
							<p className="text-gray-500 font-light">{topico}</p>
						</div>

						<div className="h-12 w-full text-left px-6 flex items-center border border-top">
							<p className="font-light text-gray-600">
								{"22/10/2024"}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PlanosCriadosCard;
