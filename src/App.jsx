import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MainLayout from './Layouts/MainLayout';
import Chat from './pages/Chat';
import Text from './pages/Text_generator';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/text_generator" element={<Text />} />
      </Route>
    </Routes>
  );
}
