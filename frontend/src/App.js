import "./style.scss";
import Planets from "./Components/Planets";
import Satellites from "./Components/Satellites";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {

  // make it run: start backend "nodemon server" (3002) and do frontend npm start

  return (
    <>
      <BrowserRouter>
        <div className="navigation">
          <NavLink to="/satellites">Satellites</NavLink>
          <p>|</p>
          <NavLink to="/planets">Planets</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Satellites />} />
          <Route path="/satellites" element={<Satellites />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
