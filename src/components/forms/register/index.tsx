import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export default function FormRegister() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setConfirmShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmShowPassword((prevState) => !prevState);
	};

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center p-6 "
			>
				<h4 className="text-black mb-6 font-normal text-3xl">
					Faça o Cadastro
				</h4>

				<div className="mb-6 w-[350px]">
					<label
						className="block text-sm font-medium text-gray-700"
						htmlFor="nome"
					>
						Nome
					</label>
					<input
						id="nome"
						type="text"
						placeholder="José"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className="text-red-500 text-xs mt-1">
							Nome é obrigatório
						</span>
					)}
				</div>

				<div className="mb-6 w-[350px]">
					<label
						className="block text-sm font-medium text-gray-700"
						htmlFor="email"
					>
						E-mail
					</label>
					<input
						id="email"
						type="email"
						placeholder="test@test.com"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("email", {
							required: true,
							pattern: /^\S+@\S+\.\S+$/,
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-xs mt-1">
							E-mail é obrigatório
						</span>
					)}
				</div>

				<div className="mb-6 w-[350px] relative ">
					<label
						className="block text-sm font-medium text-gray-700"
						htmlFor="password"
					>
						Senha
					</label>

					<input
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="******"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("password", {
							required: true,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						})}
					/>
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute top-8 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-500 hover:text-blue-600 transition duration-200"
					>
						{showPassword ? "🙈" : "👀"}
					</button>

					{errors.password && (
						<span className="text-red-500 text-xs mt-1">
							Senha é obrigatória
						</span>
					)}
				</div>

				<div className="mb-6 w-[350px] relative">
					<label
						className="block text-sm font-medium text-gray-700"
						htmlFor="confirmPassword"
					>
						Confirmar Senha
					</label>
					<input
						id="confirmPassword"
						type={showConfirmPassword ? "text" : "password"}
						placeholder="******"
						className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
						{...register("confirmPassword", {
							required: true,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
						})}
					/>
					<button
						type="button"
						onClick={toggleConfirmPasswordVisibility}
						className="absolute top-8 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-500 hover:text-blue-600 transition duration-200"
					>
						{showConfirmPassword ? "🙈" : "👀"}
					</button>
					{errors.confirmPassword && (
						<span className="text-red-500 text-xs mt-1">
							Confirmar senha é obrigatório
						</span>
					)}
				</div>

				<input
					type="submit"
					value="Cadastre-se"
					className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all duration-200 cursor-pointer shadow-md"
				/>
			</form>
		</>
	);
}
