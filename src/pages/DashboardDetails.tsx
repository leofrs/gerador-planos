import { useParams } from "react-router-dom";
import Navbar from "../components/header/navbar";
import { planosCriados } from "../db/cards/planosCriados";
import Accordion from "../components/accordion";

const DashboardDetails = () => {
  const { id } = useParams();
  if (!id) {
    alert("Tarefa Id não encontrado");
    return;
  }
  const task = planosCriados.find((task) => task.id === parseInt(id));

  if (!task) {
    return <div>Tarefa não encontrada</div>;
  }
  return (
    <>
      <Navbar />
      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white mt-8 flex flex-col gap-8">
        <div className="border-b border-gray-200" key={id}>
          <div className="flex flex-col gap-4 w-full py-3 text-left text-textThird font-medium bg-bgSecondary rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 px-5 ">
            <h2 className="text-2xl font-semibold">{task.title}</h2>
            <div className="flex gap-8">
              <p>⏲️ {task.time} min</p>
              <p>📖 {task.description}</p>
              <p>👤 {task.nivel}</p>
            </div>
          </div>
        </div>
        <Accordion
          id={task.id}
          title={task.title}
          time={task.time}
          descripton={task.description}
          about={task.about}
        />
      </section>
    </>
  );
};

export default DashboardDetails;
