import { Route, Routes } from "react-router-dom";
import "./App.css";
import CommentaryPage from "./pages/CommentaryPage/CommentaryPage";
import HomePage from "./pages/Homepage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TranslatorPage from "./pages/TranslatorPage/TranslatorPage";

export default function App() {
  return (
    <>
      <h1>Babel Bites</h1>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/commentary" element={<CommentaryPage />} />
      </Routes>
    </>
  );
}
