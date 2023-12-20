import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotesPage from "./pages/NotesPage/NotesPage";
import HomePage from "./pages/Homepage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TranslatorPage from "./pages/TranslatorPage/TranslatorPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/translator/" element={<TranslatorPage />} />
        <Route
          path="/translator/text/:selectedText"
          element={<TranslatorPage />}
        />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/:selectedNews" element={<NotesPage />} />
      </Routes>
    </>
  );
}
