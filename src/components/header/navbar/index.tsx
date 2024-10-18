const Navbar = () => {
  return (
    <nav className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="flex justify-between items-center h-16">
        <div>
          <p className="text-textSecondary">Gerador de planos</p>
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md text-textSecondary">
            Login
          </li>
          <li className="inline-flex items-center justify-center h-9 px-4 py-2 border rounded-md text-textSecondary">
            Registrar
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
