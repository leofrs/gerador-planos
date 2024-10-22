import { funcionamento } from "../../../db/cards/funciomento";

const CardObjetivo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {funcionamento.map((item) => {
        const { id, title, description } = item;
        return (
          <div className="flex flex-col items-center text-center " key={id}>
            <div className="w-12 h-12 border rounded-full flex items-center justify-center text-xl font-bold mb-4">
              {id}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardObjetivo;
