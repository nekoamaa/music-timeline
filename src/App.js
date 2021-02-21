import './App.css';
import Header from "./components/header"
import Sidenav from "./components/sidenav"
import Timeline from "./components/timeline"


function App() {
	return (
		<div className="container-fluid">
			<div className="row">				
				<Header />			
				<Sidenav />				
				<Timeline />
			</div>		
		</div>
	);
}

export default App;
