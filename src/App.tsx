import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BusinessPage from './pages/Business';
import ContactPage from './pages/Contact';
import ReferencePage from './pages/Reference';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reference" element={<ReferencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
