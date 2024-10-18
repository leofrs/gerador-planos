import Navbar from "./navbar";

const Header = () => {
  return (
    <header className=" w-full mx-auto  max-w-screen-xl px-2.5 md:px-20 bg-bgPrimary ">
      <Navbar />

      <section className="py-20 md:py-28 text-center relative overflow-hidden ">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-textPrimary">
          Crie planos de aulas/estudos personalizados e envolventes em segundos
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-textSecondary">
          Potencialize seu ensino com planos de aula gerados por IA adaptados às
          suas necessidades. Economize tempo e inspire seus alunos com conteúdo
          criativo e envolvente.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a className="inline-flex items-center justify-center  h-10 rounded-md px-8 border cursor-pointer text-textSecondary">
            Testar
          </a>
          <a className="inline-flex items-center justify-center  h-10 rounded-md px-8 border cursor-pointer text-textSecondary">
            Saiba Mais
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
