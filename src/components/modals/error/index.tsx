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
          <h1 className="text-3xl font-bold">Error Encontrado...</h1>
          <p className="font-light text-gray-500">
            Um erro interno foi encontrado ao gerar o seu planner
          </p>

          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
