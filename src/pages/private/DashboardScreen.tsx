import PlanosCriadosCard from "../../components/cards/planos_criados";
import Navbar from "../../components/navbar";

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-white">
				<h1 className="text-3xl font-bold mb-6 mt-6 text-center">
					Veja os seus modelos abaixo
				</h1>
				<div className="flex space-x-4 mb-6"></div>
				<PlanosCriadosCard />
			</section>
		</>
	);
};

export default Dashboard;
