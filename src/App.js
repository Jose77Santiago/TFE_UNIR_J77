import { Routes, Route } from "react-router-dom"
import Login from './components/layout/Login.js';
import './App.css'
import Home from "./components/layout/Home.js";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
        </Routes>
    </div>
  );
}

export default App;
