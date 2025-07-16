import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

export interface Locomotive {
  _id: string;
  type: string; // 'steam' | 'diesel' | 'electric'
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  specs?: Record<string, string | number>;
  gallery?: string[];
  classes?: { name: string; description: string }[];
  history?: string;
  service?: string;
  preservation?: string;
}

const sectionList = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'history', label: 'History' },
  { id: 'specs', label: 'Technical Specifications' },
  { id: 'service', label: 'Service' },
  { id: 'preservation', label: 'Preservation' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'references', label: 'References' },
];

const LocomotiveDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [locomotive, setLocomotive] = useState<Locomotive | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [infoboxVisible, setInfoboxVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionVisible, setSectionVisible] = useState<boolean[]>(new Array(sectionList.length).fill(false));
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/locomotives/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Locomotive not found');
        return res.json();
      })
      .then(data => {
        setLocomotive(data);
        setLoading(false);
        setTimeout(() => setInfoboxVisible(true), 100); // trigger infobox animation after mount
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!locomotive) return;
    const observers: IntersectionObserver[] = [];
    sectionRefs.current = sectionRefs.current.slice(0, sectionList.length);
    sectionList.forEach((_, i) => {
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
  }, [locomotive]);

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
  if (!locomotive) return null;

  return (
    <div className="min-h-screen bg-neutral-800 py-8 px-2 md:px-8 font-['Merriweather',serif]">
      <style>{`
        .infobox-zoom {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .infobox-zoom.visible {
          opacity: 1;
          transform: scale(1);
        }
        .section-slide-in {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .section-slide-in.visible {
          opacity: 1;
          transform: translateY(0);
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
        <aside className={`md:w-1/3 w-full md:ml-8 md:order-2 mb-8 md:mb-0 md:sticky md:top-8 self-start infobox-zoom${infoboxVisible ? ' visible' : ''}`}>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
            <img
              src={locomotive.image}
              alt={locomotive.title}
              className="w-full h-56 object-cover rounded mb-4 border border-gray-300"
            />
            <h2 className="text-xl font-bold text-center mb-2">{locomotive.title}</h2>
            <div className="text-center text-sm mb-2">
              <span className="inline-block bg-gradient-to-br from-purple-600 to-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                {locomotive.type.charAt(0).toUpperCase() + locomotive.type.slice(1)} Locomotive
              </span>
            </div>
            {locomotive.specs && (
              <table className="w-full text-sm mt-2 mb-2 border-t border-b border-gray-300">
                <tbody>
                  {Object.entries(locomotive.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="font-semibold py-1 pr-2 text-gray-700 align-top">{key}</td>
                      <td className="py-1 text-gray-800 align-top">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-2/3 w-full md:pr-8">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-2 text-neutral-900">{locomotive.title}</h1>
          <p className="text-lg text-neutral-700 mb-4 italic">{locomotive.description}</p>
          <hr className="mb-6" />

          {/* Table of Contents */}
          <nav className="mb-8">
            <div className="font-semibold mb-2 text-gray-700">Contents</div>
            <ul className="list-decimal ml-6 text-blue-700 text-sm space-y-1">
              {sectionList.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline">{section.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <section id="introduction" className={`mb-8 section-slide-in${sectionVisible[0] ? ' visible' : ''}`} ref={el => (sectionRefs.current[0] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Introduction</h2>
            <p className="text-neutral-800">{locomotive.longDescription || locomotive.description}</p>
          </section>

          <section id="history" className={`mb-8 section-slide-in${sectionVisible[1] ? ' visible' : ''}`} ref={el => (sectionRefs.current[1] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">History</h2>
            <p className="text-neutral-800">{locomotive.history}</p>
          </section>

          <section id="specs" className={`mb-8 section-slide-in${sectionVisible[2] ? ' visible' : ''}`} ref={el => (sectionRefs.current[2] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Technical Specifications</h2>
            {locomotive.specs ? (
              <table className="w-full text-sm border border-gray-300 bg-gray-50 rounded">
                <tbody>
                  {Object.entries(locomotive.specs).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200">
                      <td className="font-semibold py-1 pr-2 text-gray-700 align-top w-1/3">{key}</td>
                      <td className="py-1 text-gray-800 align-top">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-neutral-800">No technical specifications available.</p>
            )}
          </section>

          <section id="service" className={`mb-8 section-slide-in${sectionVisible[3] ? ' visible' : ''}`} ref={el => (sectionRefs.current[3] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Service</h2>
            <p className="text-neutral-800">{locomotive.service}</p>
          </section>

          <section id="preservation" className={`mb-8 section-slide-in${sectionVisible[4] ? ' visible' : ''}`} ref={el => (sectionRefs.current[4] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Preservation</h2>
            <p className="text-neutral-800">{locomotive.preservation}</p>
          </section>

          <section id="gallery" className={`mb-8 section-slide-in${sectionVisible[5] ? ' visible' : ''}`} ref={el => (sectionRefs.current[5] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Gallery</h2>
            {locomotive.gallery && locomotive.gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locomotive.gallery.map((img, idx) => (
                  <div key={idx} className="bg-gray-100 rounded shadow p-2 flex flex-col items-center">
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-48 object-cover rounded mb-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setLightboxImg(img)}
                    />
                    <span className="text-xs text-gray-600">Image {idx + 1}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-800">No gallery images available.</p>
            )}
          </section>

          <section id="references" className={`mb-8 section-slide-in${sectionVisible[6] ? ' visible' : ''}`} ref={el => (sectionRefs.current[6] = el)}>
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">References</h2>
            <ul className="list-disc ml-6 text-blue-700">
              <li><a href="https://en.wikipedia.org/wiki/Indian_locomotives" target="_blank" rel="noopener noreferrer" className="hover:underline">Wikipedia: Indian locomotives</a></li>
              <li><a href="https://www.irfca.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">IRFCA: Indian Railways Fan Club</a></li>
              <li>[Add more references here]</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LocomotiveDetail; 