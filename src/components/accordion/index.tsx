import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Planos {
	_id: number;
	topico: string;
	objetivo: number;
	content: string;
}

const Accordion = ({ _id, topico, objetivo, content }: Planos) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="border-b border-gray-200" key={_id}>
			<button
				className="flex justify-between w-full py-3 text-left text-gray-900 font-medium bg-gray-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 px-6"
				onClick={toggleAccordion}
			>
				<span>{topico}</span>

				<span>{isOpen ? "-" : "+"}</span>
			</button>
			{isOpen && (
				<div className=" py-3 text-gray-700">
					<p>
						<span className="font-bold">Descrição:</span> {topico}
					</p>
					<p>
						<span className="font-bold">Duração da sessão:</span> 55
						minutos
					</p>
					<p>
						<span className="font-bold">Qual o objetivo:</span>{" "}
						{objetivo}
					</p>
					<p className="font-bold">Sobre:</p>
					<ReactMarkdown>{content}</ReactMarkdown>
				</div>
			)}
		</div>
	);
};

export default Accordion;
