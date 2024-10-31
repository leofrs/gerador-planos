interface Conclude {
	message: string;
	onClose: () => void;
}

const ConlcludeModal = ({ message, onClose }: Conclude) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
			<div className=" text-black rounded-lg shadow-lg w-full max-w-lg p-6 bg-white flex flex-col  gap-4">
				<div className="flex justify-end items-center mb-4">
					<button
						onClick={onClose}
						className="text-black hover:text-red-400 text-xl"
					>
						Fechar
					</button>
				</div>

				<div className="flex flex-col justify-center items-center w-full h-full gap-4">
					<h1 className="text-3xl font-bold">Tarefa Finalizada...</h1>
					<p className="font-light text-gray-500">Vá a dashboard</p>

					<p>{message}</p>
				</div>
			</div>
		</div>
	);
};

export default ConlcludeModal;
