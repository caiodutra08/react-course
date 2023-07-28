import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
	const nome = "John Doe";
	const props = {
		nome: "Caio",
		idade: 19,
		profissao: "Programador",
		foto: "https://via.placeholder.com/150",
	};
	return (
		<div className="App">
			<HelloWorld />
			<SayMyName nome="Caio" />
			<SayMyName nome={nome} />
			<Pessoa
				nome="Caio"
				idade="19"
				profissao="Programador"
				foto="https://via.placeholder.com/150"
			/>
			<Pessoa {...props} />
		</div>
	);
}

export default App;
