
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Schedule from "./Components/Pages/Schedule";
import Category from "./Components/Pages/Category";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter className='App'>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Schedule />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


