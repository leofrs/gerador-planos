import FormLogin from "../../components/forms/login";
import CardFuncionamento from "../../components/cards/card_funcionamento";
import CardObjetivo from "../../components/cards/card_objetivo";
import Footer from "../../components/footer";
import ModalLogin from "../../components/modals/login";
import Navbar from "../../components/navbar";
import { ModalsHooks } from "../../services/hooks/modals";

const Home = () => {
	const { openLoginModal, isModalLoginOpen, closeLoginModal } = ModalsHooks();

	return (
		<>
			<Navbar />

			<section className=" w-full mx-auto max-w-screen-xl px-2.5 md:px-20 bg-bgPrimary ">
				<header className="py-20 md:py-28 text-center relative overflow-hidden ">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-textPrimary">
						Faça o seu aprendizado ficar simples e eficaz com a
						nossa IA
					</h1>
					<p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-textSecondary">
						Potencialize o seu tempo com as soluções geradas pela
						nossa IA e adaptada às suas necessidades. Economize
						tempo e gere conteúdo envolvente e rápido.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<a
							className="inline-flex items-center justify-center  h-10 rounded-md px-8 border cursor-pointer text-textSecondary"
							onClick={openLoginModal}
						>
							Testar
						</a>
						<a
							className="inline-flex items-center justify-center  h-10 rounded-md px-8 border cursor-pointer text-textSecondary"
							href="#saiba-mais"
						>
							Saiba Mais
						</a>
					</div>
				</header>
			</section>

			<section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white">
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
						<h2
							className="text-3xl font-bold text-center mb-12 text-textPrimary"
							id="saiba-mais"
						>
							O que você pode alcançar com essa ferramenta?
						</h2>

						<CardFuncionamento />
					</div>
				</div>
			</section>

			<section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white">
				<div className="py-20 text-center">
					<h2 className="text-3xl font-bold mb-6 text-textThird">
						Pronto para transformar como você aprende?
					</h2>
					<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
						Junte-se conosco e tenha a economia tempo, eficiencia e
						contexto certo para aprender o que você quer
					</p>
					<button
						className="inline-flex items-center justify-center  h-10 rounded-md px-8 border"
						onClick={openLoginModal}
					>
						Comece a criar seu contexto agora
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-arrow-right ml-2 h-5 w-5"
						>
							<path d="M5 12h14"></path>
							<path d="m12 5 7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</section>

			<Footer />

			<ModalLogin isOpen={isModalLoginOpen} onClose={closeLoginModal}>
				<FormLogin />
			</ModalLogin>
		</>
	);
};

export default Home;
