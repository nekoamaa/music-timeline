import './App.css';
import Sidenav from "./components/sidenav"
import Timeline from "./components/timeline"

function App() {
	return (
		<div className="container-fluid">
			<div className="row">				
				<div className="col-12 top-container">
					<div className="header" id="myHeader">
						<h1>nekoama's music timeline</h1>
					</div>
				</div>
			
				<Sidenav />
				
				<Timeline />
			</div>		
		</div>
	);
}

export default App;
