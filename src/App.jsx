import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';

const services = [
  'Ground Transportation',
  'Ocean Freight',
  'Air Freight',
  'Contract Logistics',
  'Warehousing',
  'End-to-End Solutions',
];

function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-section-y">
        <h2 className="text-3xl font-semibold tracking-tight text-deepSlate">Our Services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service} className="rounded-2xl border border-deepSlate/10 bg-white/75 p-5 text-sm font-medium text-deepSlate/85">
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 pb-section-y md:grid-cols-3">
        <article className="rounded-2xl border border-deepSlate/10 bg-white/75 p-6">
          <p className="text-3xl font-bold text-deepSlate">25+</p>
          <p className="mt-2 text-sm text-deepSlate/75">Years of logistics and forwarding experience.</p>
        </article>
        <article className="rounded-2xl border border-deepSlate/10 bg-white/75 p-6">
          <p className="text-3xl font-bold text-deepSlate">Pan-India</p>
          <p className="mt-2 text-sm text-deepSlate/75">Associated offices across major port and trade cities.</p>
        </article>
        <article className="rounded-2xl border border-deepSlate/10 bg-white/75 p-6">
          <p className="text-3xl font-bold text-deepSlate">On-Time</p>
          <p className="mt-2 text-sm text-deepSlate/75">We promise to route shipments safe, fast, and on time.</p>
        </article>
      </section>
    </>
  );
}

function PlaceholderPage({ title, body }) {
  return (
    <section className="py-section-y">
      <h1 className="text-4xl font-bold tracking-tight text-deepSlate">{title}</h1>
      <p className="mt-4 max-w-2xl text-deepSlate/75">{body}</p>
    </section>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <PlaceholderPage
              title="Freight & Logistics Services"
              body="From customs support to multimodal freight movement, we deliver practical, cost-efficient logistics programs tailored to shipment urgency and cargo profile."
            />
          }
        />
        <Route
          path="/about"
          element={
            <PlaceholderPage
              title="About Atul Logistics"
              body="We are a fast-growing logistics company focused on dependable execution, transparent communication, and long-term customer partnerships."
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PlaceholderPage
              title="Contact"
              body="Call +91 22 6121 8888 or email atulship@atulship.in to discuss shipping plans, routing, and quote requirements."
            />
          }
        />
      </Routes>
    </Layout>
  );
}
