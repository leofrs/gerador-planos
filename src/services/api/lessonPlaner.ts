type Lesson = {
	title: string;
	topico: string;
	objetivo: string;
};

const urlBase = import.meta.env.VITE_API_BASE_URL;

export class LessonPlanerApi {
	async createLesson({ title, topico, objetivo }: Lesson) {
		try {
			const response = await fetch(`${urlBase}/api/v1/create-plan-ia`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					topico,
					objetivo,
				}),
			});

			if (!response.ok) {
				throw new Error(
					`Erro: ${response.status} - ${response.statusText}`
				);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Erro ao criar a lição:", error);
			throw error;
		}
	}

	async getLesson() {
		try {
			const response = await fetch(`${urlBase}/api/v1/get-plan-ia`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error fetching lesson:", error);
			throw error;
		}
	}
}
