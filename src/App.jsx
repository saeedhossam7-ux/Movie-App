
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./page/LoginPage/LoginPage";
import HomePage from "./page/HomePage/HomePage";
import SinupPage from "./page/SinupPage/SinupPage";
import NotFound from "./page/NotFound/NotFound";
import MovieDetails from "./page/MovieDetails/MovieDetails";

export default function App() {
  return <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
        <Route path="/signup" element={<SinupPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </>
}
