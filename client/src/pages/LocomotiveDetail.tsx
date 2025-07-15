import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export interface Fact {
  label: string;
  value: string;
  icon: string;
}
export interface TechHighlight {
  icon: string;
  title: string;
  desc: string;
}
export interface Shed {
  name: string;
  region: string;
}

export interface LocomotiveDetailProps {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  heroImage: string;
  quickFacts: Fact[];
  specs: Fact[];
  history: React.ReactNode;
  service: React.ReactNode;
  features: string[];
  funFacts: string[];
  sheds: Shed[];
  techHighlights: TechHighlight[];
  breadcrumbs: { label: string; to?: string }[];
}

const LocomotiveDetail: React.FC<LocomotiveDetailProps> = ({
  heroBadge,
  heroTitle,
  heroSubtitle,
  heroDesc,
  heroImage,
  quickFacts,
  specs,
  history,
  service,
  features,
  funFacts,
  sheds,
  techHighlights,
  breadcrumbs,
}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-yellow-100/10 shadow-lg overflow-hidden">
        <div className="flex-1 z-10 fadein-section">
          <span className="inline-block bg-yellow-400 text-neutral-900 font-bold px-4 py-1 rounded-full mb-2 text-sm tracking-widest shadow-md">{heroBadge}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-yellow-300 drop-shadow-lg">{heroTitle}</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-100/90">{heroSubtitle}</h2>
          <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-xl">{heroDesc}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            Back
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center relative fadein-section">
          <img
            src={heroImage}
            alt={heroTitle}
            className="w-[420px] h-[270px] object-cover rounded-3xl shadow-2xl border-4 border-yellow-300 bg-black/30"
            style={{ filter: 'brightness(0.95) contrast(1.1)' }}
          />
        </div>
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl z-0" />
      </section>

      {/* Quick Facts & Specs */}
      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 fadein-section">
        <div className="bg-neutral-800 bg-opacity-80 rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-yellow-400 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Quick Facts <span>📋</span></h3>
          <ul className="grid grid-cols-2 gap-4">
            {quickFacts.map(fact => (
              <li key={fact.label} className="flex flex-col gap-1">
                <span className="text-yellow-200 font-semibold flex items-center gap-1">{fact.icon} {fact.label}</span>
                <span className="text-lg text-white">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-800 bg-opacity-80 rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Technical Specs <span>🛠️</span></h3>
          <ul className="grid grid-cols-2 gap-4">
            {specs.map(spec => (
              <li key={spec.label} className="flex flex-col gap-1">
                <span className="text-yellow-200 font-semibold flex items-center gap-1">{spec.icon} {spec.label}</span>
                <span className="text-lg text-white">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* History & Service */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 fadein-section">
        <div className="bg-neutral-800 bg-opacity-90 rounded-2xl shadow-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">History & Development <span>📖</span></h3>
          {history}
        </div>
        <div className="bg-neutral-800 bg-opacity-90 rounded-2xl shadow-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Service & Operations <span>🚆</span></h3>
          {service}
        </div>
      </section>

      {/* Notable Features & Fun Facts */}
      <section className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 fadein-section">
        <div className="bg-neutral-800 bg-opacity-95 rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Notable Features <span>⭐</span></h3>
          <ul className="list-disc list-inside text-lg text-neutral-200 space-y-2">
            {features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="bg-neutral-800 bg-opacity-95 rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Fun Facts <span>🎉</span></h3>
          <ul className="list-disc list-inside text-lg text-neutral-200 space-y-2">
            {funFacts.map((fact, i) => <li key={i}>{fact}</li>)}
          </ul>
        </div>
      </section>

      {/* Major Sheds */}
      <section className="max-w-6xl mx-auto mt-16 px-6 fadein-section">
        <div className="bg-neutral-800 bg-opacity-90 rounded-2xl shadow-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Major Sheds <span>🏠</span></h3>
          <ul className="list-disc list-inside text-neutral-200">
            {sheds.map(shed => (
              <li key={shed.name}><span className="font-semibold text-yellow-100">{shed.name}</span> <span className="text-xs text-neutral-400">({shed.region})</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Design & Technology Highlights */}
      <section className="max-w-6xl mx-auto mt-16 px-6 fadein-section">
        <div className="bg-neutral-800 bg-opacity-90 rounded-2xl shadow-lg p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">Design & Technology Highlights <span>💡</span></h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techHighlights.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <div className="font-bold text-yellow-200">{item.title}</div>
                  <div className="text-neutral-200 text-sm">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Breadcrumbs & Footer */}
      <section className="max-w-6xl mx-auto mt-16 px-6 pb-12 fadein-section">
        <div className="flex flex-wrap items-center gap-2 text-yellow-200 text-sm mb-4">
          {breadcrumbs.map((b, i) => (
            <>
              {b.to ? (
                <span key={b.label} className="cursor-pointer hover:underline" onClick={() => navigate(b.to!)}>{b.label}</span>
              ) : (
                <span key={b.label} className="font-bold">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span key={b.label + '-sep'}>/</span>}
            </>
          ))}
        </div>
        <div className="text-neutral-400 text-xs">Page design © RailFan | Data from Indian Railways & enthusiast sources</div>
      </section>

      {/* Minimal Animations */}
      <style>{`
        .fadein-section { opacity: 0; transform: translateY(30px); animation: fadein-section 0.8s cubic-bezier(.4,0,.2,1) forwards; }
        .fadein-section:nth-of-type(1) { animation-delay: 0.1s; }
        .fadein-section:nth-of-type(2) { animation-delay: 0.2s; }
        .fadein-section:nth-of-type(3) { animation-delay: 0.3s; }
        .fadein-section:nth-of-type(4) { animation-delay: 0.4s; }
        .fadein-section:nth-of-type(5) { animation-delay: 0.5s; }
        @keyframes fadein-section { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default LocomotiveDetail; 