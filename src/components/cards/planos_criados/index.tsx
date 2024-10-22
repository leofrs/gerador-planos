import { planosCriados } from "../../../db/cards/planosCriados";

const PlanosCriadosCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {planosCriados.map((lesson) => {
        const { id, title, description } = lesson;
        return (
          <div
            className="rounded-xl border  shadow text-center hover:shadow-bgSecondary hover:border-bgSecondary transition-shadow cursor-pointer"
            key={id}
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                {title}
              </h3>
            </div>

            <div className="p-6 pt-0">
              <p className="text-gray-500 font-light">{description}</p>
            </div>

            <div className=" h-12 w-full text-left px-6 flex items-center border border-top">
              <p className="font-light text-gray-600">22/10/2024</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanosCriadosCard;
