import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateForm from "./components/CreateForm";
import Navbar from "./components/Navbar";
import ShowUserData from "./components/ShowUserData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateForm />} />
          <Route exact path="/show" element={<ShowUserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
