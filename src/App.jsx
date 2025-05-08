import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MainLayout from './Layouts/MainLayout';
import Chat from './pages/Chat';
import Text from './pages/Text_generator';
import Plain_Text from './pages/ClarityBot'
import GrammarBot from './pages/Grammar';
import Captions from './pages/Captions';
import Resume from './pages/Resume';
import Translator from './pages/Translator';
import Summarize from './pages/Summarize';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/text_generator" element={<Text />} />
        <Route path="/clarityBot" element={<Plain_Text />} />
        <Route path="/grammar_check" element={<GrammarBot />} />
        <Route path="/captions_generator" element={<Captions />} />
        <Route path="/resume_builder" element={<Resume/>} />
        <Route path="/translator" element={<Translator/>} />
        <Route path="/summarize" element={<Summarize/>} />
      </Route>
    </Routes>
  );
}
