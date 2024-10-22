import ModalLogin from "../../modals/login";
import FormLogin from "../../auth/loginForm";
import { ModalsHooks } from "../../../hooks/modals";
import ModalRegister from "../../modals/register";
import FormRegister from "../../auth/registerForm";
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
              <p className="text-textSecondary">Gerador de planos</p>
            </div>

            <button
              className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md text-textSecondary cursor-pointer"
              onClick={handleSair}
            >
              Sair
            </button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}

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
