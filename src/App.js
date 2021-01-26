import "./App.css"
import { Route, Switch } from "react-router-dom"
import JobDetailPage from "./pages/JobDetailPage"
import JobListPage from "./pages/JobListPage"

function App() {
	return (
		<div className="app-container">
			<Switch>
				<Route path="/jobs/:id" component={JobDetailPage} />
				<Route path="/jobs" component={JobListPage} />
			</Switch>
		</div>
	)
}

export default App
