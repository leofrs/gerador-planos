import { useState } from "react";

export const ModalsHooks = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] =
    useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const openLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);
  const closeLoginModal = () => setIsModalLoginOpen(!isModalLoginOpen);

  const openRegisterModal = () => setIsModalRegisterOpen(!isModalRegisterOpen);
  const closeRegisterModal = () => setIsModalRegisterOpen(!isModalRegisterOpen);

  const handleStartLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return {
    isModalLoginOpen,
    openLoginModal,
    closeLoginModal,
    isModalRegisterOpen,
    openRegisterModal,
    closeRegisterModal,
    loading,
    handleStartLoading,
  };
};
