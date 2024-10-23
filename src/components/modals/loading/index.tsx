import { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 20), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className=" text-black rounded-lg shadow-lg w-full max-w-lg p-6 bg-white flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Gerando o seu plano..</h1>
        <p className="font-light text-gray-500">
          Nossa IA está criando o plano perfeito para você
        </p>
        <progress value={progress} max="100"></progress>
        <p>{progress}%</p>
      </div>
    </div>
  );
};
