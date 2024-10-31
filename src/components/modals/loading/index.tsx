export const LoadingModal = (loading: { loading: boolean }) => {
	if (!loading) return null;
	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
			<div className="text-black rounded-lg shadow-lg w-full max-w-lg p-6 bg-white flex flex-col justify-center items-center gap-4">
				<h1 className="text-3xl font-bold">Gerando o seu plano...</h1>
				<p className="font-light text-gray-500">
					Nossa IA está criando o plano perfeito para você
				</p>
				<svg
					className="animate-spin h-8 w-8 mr-3"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 4335 4335"
				>
					<path
						fill="#008DD2"
						d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
					/>
				</svg>
			</div>
		</div>
	);
};
