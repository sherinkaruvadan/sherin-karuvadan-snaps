import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetails from "./pages/PhotoDetailsPage/PhotoDetailsPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
