import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
