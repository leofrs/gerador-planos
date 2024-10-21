import ModalLogin from "../../modals/login";
import FormLogin from "../../auth/loginForm";
import { ModalsHooks } from "../../../hooks/modals";
import ModalRegister from "../../modals/register";
import FormRegister from "../../auth/registerForm";

const Navbar = () => {
  const {
    isModalLoginOpen,
    openLoginModal,
    closeLoginModal,
    isModalRegisterOpen,
    openRegisterModal,
    closeRegisterModal,
  } = ModalsHooks();

  return (
    <nav className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="flex justify-between items-center h-16">
        <div>
          <p className="text-textSecondary">Gerador de planos</p>
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li
            className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md text-textSecondary cursor-pointer"
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

      <ModalLogin
        isOpen={isModalLoginOpen}
        onClose={closeLoginModal}
        title="Login"
      >
        <FormLogin />
      </ModalLogin>

      <ModalRegister
        isOpen={isModalRegisterOpen}
        onClose={closeRegisterModal}
        title="Cadastro"
      >
        <FormRegister />
      </ModalRegister>
    </nav>
  );
};

export default Navbar;
