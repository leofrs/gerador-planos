type Lesson = {
  topic: string;
  subTopic: string;
  duration: number;
  studentLevel: string;
  objecive: string;
  email: string;
};

const urlBase = import.meta.env.VITE_API_BASE_URL;
const VITE_API_CREATE_LESSON = import.meta.env.VITE_API_CREATE_LESSON;
export class LessonPlanerApi {
  async createLesson({
    topic,
    subTopic,
    duration,
    studentLevel,
    objecive,
    email,
  }: Lesson) {
    const response = await fetch(`${urlBase}${VITE_API_CREATE_LESSON}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        subTopic,
        duration,
        studentLevel,
        objecive,
        email,
      }),
    });

    const data = await response.json();

    let dataFetchOk;
    let dataFetchError;

    if (response.ok) {
      dataFetchOk = data;
    } else {
      dataFetchError = data.message;
    }

    return { dataFetchOk, dataFetchError };
  }
}
