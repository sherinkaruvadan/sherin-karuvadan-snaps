import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="photo/:photoId" element={<PhotoDetails />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default App;
