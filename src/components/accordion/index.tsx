import { useState } from "react";

interface Planos {
  id: number;
  title: string;
  descripton: string;
  time: number;
  about: string;
}

const Accordion = ({ id, title, descripton, time, about }: Planos) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b border-gray-200" key={id}>
      <button
        className="flex justify-between w-full py-3 text-left text-gray-900 font-medium bg-gray-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className=" py-3 text-gray-700">
          <p>Descrição: {descripton}</p>
          <p>Duração da sessão: {time}</p>
          <p>Sobre:{about}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
