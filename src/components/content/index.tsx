import CardObjetivo from "../card_objetivo";
import CardFuncionamento from "../card_funcionamento";

const Content = () => {
  return (
    <main>
      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
        <div className="py-20 ">
          <h2 className="text-3xl font-bold text-center mb-12 text-textThird">
            Escolha o melhor para o seu objetivo
          </h2>

          <CardObjetivo />
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-bgPrimary text-textSecondary ">
        <div className="py-20">
          <div className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-textPrimary">
              O que você pode alcançar com essa ferramenta?
            </h2>

            <CardFuncionamento />
          </div>
        </div>
      </section>

      {/* <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Escolha o seu plano
          </h2>
          <p className="text-gray-500 text-sm text-center">
            Por favor, verifique se você está logado antes de escolher o seu
            plano
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 wax-w-4xl mx-auto mt-8">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-2xl">Free</h3>
                <p className="text-muted-foreground text-3xl font-bold">
                  R$ 0<span className="text-base font-normal">/mês</span>
                </p>
              </div>

              <div className="p-6 pt-0">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    5 lesson plans per month
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Pre-selected topics
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Basic customization
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Email support
                  </li>
                </ul>
              </div>

              <div className="flex items-center p-6 pt-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Vamos inciar
                </a>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold tracking-tight text-2xl">Pro</h3>
                <p className="text-muted-foreground text-3xl font-bold">
                  R$ 50<span className="text-base font-normal">/mês</span>
                </p>
              </div>

              <div className="p-6 pt-0">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    5 lesson plans per month
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Pre-selected topics
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Basic customization
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check h-5 w-5 text-primary mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Email support
                  </li>
                </ul>
              </div>

              <div className="flex items-center p-6 pt-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-textThird">
            Pronto para transformar seu plano de aula?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de professores que já estão economizando tempo e
            criando planos de aula envolventes conosco.
          </p>
          <a
            className="inline-flex items-center justify-center  h-10 rounded-md px-8 border"
            href="/pricing"
          >
            Comece a criar seu plano agora
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <div className="p-2">
          <p className="text-center">
            ©️ Leonardo Santos 2024. Todos os direitos reservados!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Content;
