import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NotesPage from "./pages/NotesPage/NotesPage";
import HomePage from "./pages/Homepage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TranslatorPage from "./pages/TranslatorPage/TranslatorPage";
import Header from "./components/Header";
import { TextContext } from "./context/TextContext";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Header />
      <TextContext.Provider value={setText}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route
            path="/translator"
            element={<TranslatorPage text={text} setText={setText} />}
          />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </TextContext.Provider>
    </>
  );
}
