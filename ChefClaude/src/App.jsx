import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;
	console.log(apiKey);
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

export default App;
