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
      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white mt-8">
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
