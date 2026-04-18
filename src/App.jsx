import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';

function PlaceholderPage({ title }) {
  return (
    <section className="py-section-y">
      <h1 className="text-4xl font-bold tracking-tight text-deepSlate">{title}</h1>
      <p className="mt-4 max-w-2xl text-deepSlate/75">
        This page shell is ready for modular sections following the Project Codex.
      </p>
    </section>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<PlaceholderPage title="Services" />} />
        <Route path="/about" element={<PlaceholderPage title="About Atul Logistics" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
      </Routes>
    </Layout>
  );
}
