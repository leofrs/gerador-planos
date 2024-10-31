import ModalLogin from "../modals/login";
import FormLogin from "../forms/login";
import { ModalsHooks } from "../../services/hooks/modals";
import ModalRegister from "../modals/register";
import FormRegister from "../forms/register";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const {
		isModalLoginOpen,
		openLoginModal,
		closeLoginModal,
		isModalRegisterOpen,
		openRegisterModal,
		closeRegisterModal,
	} = ModalsHooks();
	const navigate = useNavigate();
	const userLocal = localStorage.getItem("usuario");

	const handleSair = () => {
		localStorage.removeItem("usuario");
		navigate("/");
	};

	return (
		<nav className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-bgPrimary">
			{userLocal ? (
				<>
					<div className="flex justify-between items-center h-16">
						<div>
							<p className="text-textSecondary">Hack Context</p>
						</div>
						<ul className="hidden md:flex items-center space-x-4">
							<li
								className="inline-flex items-center justify-center h-9 px-4 py-2 bg-gray-700 rounded-md text-textSecondary cursor-pointer"
								onClick={() => navigate("/auth/user/home")}
							>
								Dashboard
							</li>
							<li
								className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md cursor-pointer bg-bgSecondary text-textThird border-bgPrimary font-medium"
								onClick={() =>
									navigate("/auth/user/home/create")
								}
							>
								Criar
							</li>
							<li
								className="inline-flex items-center justify-center h-9 px-4 py-2 bg-gray-700 rounded-md text-textSecondary cursor-pointer hover:bg-red-400 hover:text-textThird"
								onClick={handleSair}
							>
								Sair
							</li>
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="flex justify-between items-center h-16">
						<div>
							<p className="text-textSecondary">Hack Context</p>
						</div>

						<ul className="hidden md:flex items-center space-x-4">
							<li
								className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md bg-bgSecondary text-textThird border-bgPrimary cursor-pointer font-medium"
								onClick={openLoginModal}
							>
								Entrar
							</li>
							<li
								className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md text-textSecondary cursor-pointer"
								onClick={openRegisterModal}
							>
								Registrar
							</li>
						</ul>
					</div>
				</>
			)}

			<ModalLogin isOpen={isModalLoginOpen} onClose={closeLoginModal}>
				<FormLogin />
			</ModalLogin>

			<ModalRegister
				isOpen={isModalRegisterOpen}
				onClose={closeRegisterModal}
			>
				<FormRegister />
			</ModalRegister>
		</nav>
	);
};

export default Navbar;
