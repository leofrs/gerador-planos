import { useState } from "react";

export const ModalsHooks = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] =
    useState<boolean>(false);

  const openLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);
  const closeLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);

  const openRegisterModal = () => setIsModalRegisterOpen(!isModalRegisterOpen);
  const closeRegisterModal = () => setIsModalRegisterOpen(!isModalRegisterOpen);

  return {
    isModalLoginOpen,
    openLoginModal,
    closeLoginModal,
    isModalRegisterOpen,
    openRegisterModal,
    closeRegisterModal,
  };
};
