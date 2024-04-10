import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddReportPage from "./pages/AddReportPage";
import EditReport from "./pages/EditReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-report" element={<AddReportPage />} />
            <Route path="/edit-report/:id" element={<EditReport />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
