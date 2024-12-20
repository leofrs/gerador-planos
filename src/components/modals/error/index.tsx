interface Error {
	message: string;
	onClose: () => void;
}

const ErrorModal = ({ message, onClose }: Error) => {
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
					<h1 className="text-3xl font-bold">
						Algo de errado aconteceu!
					</h1>
					<p className="font-normal text-gray-500">
						Um erro foi encontrado ao gerar o seu modelo
					</p>

					<p className="text-red-600 font-semibold">{message}</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
