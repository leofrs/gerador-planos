import { lessonPlaners } from "../../../db/cards/lessonPlaners";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {lessonPlaners.map((lesson) => {
        const { id, title, description } = lesson;
        return (
          <div
            className="rounded-xl border bg-card text-card-foreground shadow text-center hover:shadow-bgSecondary hover:border-bgSecondary transition-shadow"
            key={id}
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow hover:shadow-bgSecondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right w-6 h-6 "
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <h3 className="font-semibold leading-none tracking-tight">
                {title}
              </h3>
            </div>

            <div className="p-6 pt-0">
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
