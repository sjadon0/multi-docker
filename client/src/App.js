import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">OtherPage</Link>

        <Routes>
          <Route exact path="/" element={<Fib />}></Route>
          <Route path="/otherpage" element={<OtherPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
