import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Zone {
  _id: string;
  name: string;
  abbreviation?: string;
  image: string;
  region?: string;
  established?: string;
  headquarters?: string;
  about?: string;
  history?: string;
  geography?: string;
  operations?: string;
  divisions?: string[];
  majorStations?: string[];
  gallery?: string[];
  website?: string;
  wikipedia?: string;
  references?: string[];
}

const sectionList = [
  { key: 'about', label: 'About' },
  { key: 'history', label: 'History' },
  { key: 'geography', label: 'Geography' },
  { key: 'operations', label: 'Operations' },
  { key: 'divisions', label: 'Divisions' },
  { key: 'majorStations', label: 'Major Stations' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'references', label: 'References' },
];

const ZoneDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [zone, setZone] = useState<Zone | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionVisible, setSectionVisible] = useState<boolean[]>([]);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/zones/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Zone not found');
        return res.json();
      })
      .then(data => {
        setZone(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Section animation logic
  useEffect(() => {
    if (!zone) return;
    // Only show sections that have content
    const sections = sectionList.filter(section => {
      if (section.key === 'about') return !!zone.about;
      if (section.key === 'history') return !!zone.history;
      if (section.key === 'geography') return !!zone.geography;
      if (section.key === 'operations') return !!zone.operations;
      if (section.key === 'divisions') return zone.divisions && zone.divisions.length > 0;
      if (section.key === 'majorStations') return zone.majorStations && zone.majorStations.length > 0;
      if (section.key === 'gallery') return zone.gallery && zone.gallery.length > 0;
      if (section.key === 'references') return zone.references && zone.references.length > 0;
      return false;
    });
    setSectionVisible(new Array(sections.length).fill(false));
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    const observers: IntersectionObserver[] = [];
    sections.forEach((_, i) => {
      if (!sectionRefs.current[i]) return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setSectionVisible((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(sectionRefs.current[i]!);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [zone]);

  // Lightbox close on Escape
  useEffect(() => {
    if (!lightboxImg) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxImg]);

  if (loading) return <div className="text-center text-white py-16">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-16">{error}</div>;
  if (!zone) return null;

  // Only show sections with content
  const visibleSections = sectionList.filter(section => {
    if (section.key === 'about') return !!zone.about;
    if (section.key === 'history') return !!zone.history;
    if (section.key === 'geography') return !!zone.geography;
    if (section.key === 'operations') return !!zone.operations;
    if (section.key === 'divisions') return zone.divisions && zone.divisions.length > 0;
    if (section.key === 'majorStations') return zone.majorStations && zone.majorStations.length > 0;
    if (section.key === 'gallery') return zone.gallery && zone.gallery.length > 0;
    if (section.key === 'references') return zone.references && zone.references.length > 0;
    return false;
  });

  return (
    <div className="min-h-screen bg-neutral-800 py-8 px-2 md:px-8 font-['Merriweather',serif]">
      <style>{`
        .section-slide-in {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1);
        }
        .section-slide-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .infobox-animate {
          opacity: 0;
          transform: translateX(40px) scale(0.97);
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .infobox-animate.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        .lightbox-bg {
          position: fixed;
          z-index: 50;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 80vh;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .lightbox-img.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
      {lightboxImg && (
        <div className="lightbox-bg" onClick={() => setLightboxImg(null)}>
          <img
            src={lightboxImg}
            alt="Gallery large"
            className="lightbox-img visible"
            style={{ animation: 'none' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      <div className="max-w-5xl mx-auto bg-white bg-opacity-95 rounded-lg shadow-lg p-6 md:p-12 relative flex flex-col md:flex-row">
        {/* Infobox */}
        <aside className={`md:w-1/3 w-full md:ml-8 md:order-2 mb-8 md:mb-0 md:sticky md:top-8 self-start infobox-animate${zone ? ' visible' : ''}`}>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 shadow-md overflow-hidden max-w-full">
            <img
              src={zone.image}
              alt={zone.name}
              className="w-full h-56 object-cover rounded mb-4 border border-gray-300 transition-transform duration-700 ease-in-out hover:scale-105"
              onClick={() => setLightboxImg(zone.image)}
              style={{ cursor: 'zoom-in' }}
            />
            <h2 className="text-xl font-bold text-center mb-2 text-neutral-800">{zone.name} {zone.abbreviation && <span className="text-base text-neutral-500">({zone.abbreviation})</span>}</h2>
            <table className="w-full text-sm mt-2 mb-2 border-t border-b border-gray-300 max-w-full">
              <tbody>
                {zone.established && <tr><td className="font-semibold py-1 pr-2 text-gray-700 align-top">Established</td><td className="py-1 text-gray-800 align-top break-all max-w-full">{zone.established}</td></tr>}
                {zone.headquarters && <tr><td className="font-semibold py-1 pr-2 text-gray-700 align-top">Headquarters</td><td className="py-1 text-gray-800 align-top break-all max-w-full">{zone.headquarters}</td></tr>}
                {zone.region && <tr><td className="font-semibold py-1 pr-2 text-gray-700 align-top">Region</td><td className="py-1 text-gray-800 align-top break-all max-w-full">{zone.region}</td></tr>}
                {zone.website && <tr><td className="font-semibold py-1 pr-2 text-gray-700 align-top">Website</td><td className="py-1 text-blue-700 align-top"><a href={zone.website} target="_blank" rel="noopener noreferrer" className="underline">Official Website</a></td></tr>}
                {zone.wikipedia && <tr><td className="font-semibold py-1 pr-2 text-gray-700 align-top">Wikipedia</td><td className="py-1 text-blue-700 align-top"><a href={zone.wikipedia} target="_blank" rel="noopener noreferrer" className="underline">Wikipedia Page</a></td></tr>}
              </tbody>
            </table>
          </div>
        </aside>
        {/* Main Content */}
        <main className="md:w-2/3 w-full">
          {visibleSections.map((section, idx) => (
            <section
              key={section.key}
              ref={el => (sectionRefs.current[idx] = el)}
              className={`section-slide-in${sectionVisible[idx] ? ' visible' : ''} mb-10`}
              style={{ transitionDelay: sectionVisible[idx] ? `${idx * 120 + 200}ms` : '0ms' }}
            >
              <h3 className="text-2xl font-bold text-black mb-4 mt-2">{section.label}</h3>
              {section.key === 'about' && zone.about && <p className="text-neutral-800 mb-2 whitespace-pre-line">{zone.about}</p>}
              {section.key === 'history' && zone.history && <p className="text-neutral-800 mb-2 whitespace-pre-line">{zone.history}</p>}
              {section.key === 'geography' && zone.geography && <p className="text-neutral-800 mb-2 whitespace-pre-line">{zone.geography}</p>}
              {section.key === 'operations' && zone.operations && <p className="text-neutral-800 mb-2 whitespace-pre-line">{zone.operations}</p>}
              {section.key === 'divisions' && zone.divisions && zone.divisions.length > 0 && (
                <ul className="list-disc ml-6 text-neutral-800">
                  {zone.divisions.map((div, i) => <li key={i}>{div}</li>)}
                </ul>
              )}
              {section.key === 'majorStations' && zone.majorStations && zone.majorStations.length > 0 && (
                <ul className="list-disc ml-6 text-neutral-800">
                  {zone.majorStations.map((st, i) => <li key={i}>{st}</li>)}
                </ul>
              )}
              {section.key === 'gallery' && zone.gallery && zone.gallery.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-2">
                  {zone.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`Gallery ${i + 1}`} className="w-40 h-28 object-cover rounded shadow transition-transform duration-700 ease-in-out hover:scale-105" onClick={() => setLightboxImg(img)} style={{ cursor: 'zoom-in' }} />
                  ))}
                </div>
              )}
              {section.key === 'references' && zone.references && zone.references.length > 0 && (
                <ol className="list-decimal ml-6 text-blue-700">
                  {zone.references.map((ref, i) => (
                    <li key={i}><a href={ref} target="_blank" rel="noopener noreferrer" className="hover:underline">{ref}</a></li>
                  ))}
                </ol>
              )}
            </section>
          ))}
          <div className="mt-8 flex justify-between">
            <Link to="/zones">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-base px-7 py-2 transition duration-300 shadow-lg">
                ← Back to Zones
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ZoneDetail; 