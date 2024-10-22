import Navbar from "../components/header/navbar";
import LesosonPlanForm from "../components/lessonPlanForm";
const Create = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-3xl font-medium">
            Crie o seu plano personalizado
          </h1>
          <div className=" h-auto mt-8 ">
            <div className="w-full h-2 bg-bgSecondary rounded-md">
              <LesosonPlanForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;
