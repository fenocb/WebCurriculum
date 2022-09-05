import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './tailwind.css'
import Index from "./Pages/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);
