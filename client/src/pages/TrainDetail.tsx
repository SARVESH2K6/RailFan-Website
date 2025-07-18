import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Train {
  _id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  fullDescription?: string[];
  features?: string[];
  specifications?: [string, string][];
  routes?: string[];
  history?: string;
  service?: string;
  gallery?: string[];
  infobox?: Record<string, any>;
}

const getCategoryBadgeColor = (category?: string) => {
  switch (category) {
    case 'premium':
      return 'bg-blue-600';
    case 'express':
      return 'bg-purple-600';
    case 'budget':
      return 'bg-green-600';
    case 'local':
      return 'bg-gray-600';
    case 'freight':
      return 'bg-yellow-600';
    default:
      return 'bg-gray-500';
  }
};

const getCategoryDisplayText = (category?: string) => {
  switch (category) {
    case 'premium':
      return 'Premium';
    case 'express':
      return 'Express';
    case 'budget':
      return 'Budget';
    case 'local':
      return 'Local';
    case 'freight':
      return 'Freight';
    default:
      return category || 'Other';
  }
};

const TrainDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [train, setTrain] = useState<Train | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [sectionVisible, setSectionVisible] = useState<boolean[]>([]);

  // All hooks must be called unconditionally
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/trains/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Train not found');
        return res.json();
      })
      .then(data => {
        setTrain(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Restore previous animation logic
  useEffect(() => {
    if (!train) return;
    const sections = [
      !!train.fullDescription && 'description',
      !!train.features && 'features',
      !!train.specifications && 'specs',
      !!train.routes && 'routes',
      !!train.history && 'history',
      !!train.service && 'service',
      !!train.gallery && 'gallery',
    ].filter(Boolean);
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
  }, [train]);

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
  if (!train) return null;

  // Create a more detailed, Wikipedia-style section structure (no references section)
  const sectionList = [
    { key: 'about', label: 'About', show: true },
    { key: 'design', label: 'Design & Features', show: !!train.features },
    { key: 'specs', label: 'Technical Specifications', show: !!train.specifications },
    { key: 'operations', label: 'Operations', show: !!train.service },
    { key: 'routes', label: 'Major Routes', show: !!train.routes },
    { key: 'history', label: 'History', show: !!train.history },
    { key: 'gallery', label: 'Gallery', show: !!train.gallery },
  ].filter(s => s.show);

  return (
    <div className="min-h-screen bg-neutral-800 py-8 px-2 md:px-8 font-['Merriweather',serif]">
      <style>{`
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
        <aside className={`md:w-1/3 w-full md:ml-8 md:order-2 mb-8 md:mb-0 md:sticky md:top-8 self-start`}>
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
            <img
              src={train.image}
              alt={train.title}
              className="w-full h-56 object-cover rounded mb-4 border border-gray-300"
            />
            <h2 className="text-xl font-bold text-center mb-2 text-neutral-800">{train.title}</h2>
            <div className="text-center text-sm mb-2 space-y-2">
              {train.category && (
                <span className={`inline-block ${getCategoryBadgeColor(train.category)} text-white px-3 py-1 rounded-full font-semibold`}>
                  {getCategoryDisplayText(train.category)} Train
                </span>
              )}
            </div>
            {train.infobox && (
              <table className="w-full text-sm mt-2 mb-2 border-t border-b border-gray-300">
                <tbody>
                  {Object.entries(train.infobox).map(([key, value]) => (
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
        <main className="md:w-2/3 w-full">
          {sectionList.map((section, idx) => (
            <section
              key={section.key}
              ref={el => (sectionRefs.current[idx] = el)}
              className={`section-slide-in${sectionVisible[idx] ? ' visible' : ''} mb-10`}
            >
              <h3 className="text-2xl font-bold text-black mb-4 mt-2">
                {section.label}
              </h3>
              {/* About */}
              {section.key === 'about' && (
                <>
                  <table className="w-full text-neutral-800 bg-gray-100 bg-opacity-80 rounded shadow mb-4">
                    <tbody>
                      <tr>
                        <td className="font-semibold pr-4 py-1 align-top">Train Name</td>
                        <td className="py-1">{train.title}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold pr-4 py-1 align-top">Category</td>
                        <td className="py-1">{train.category || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold pr-4 py-1 align-top">Description</td>
                        <td className="py-1">{train.description}</td>
                      </tr>
                    </tbody>
                  </table>
                  {train.fullDescription && train.fullDescription.map((para, i) => (
                    <p key={i} className="mb-4 text-neutral-800 text-lg md:text-xl bg-gray-100 bg-opacity-60 rounded p-3 shadow">
                      {para}
                    </p>
                  ))}
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* Design & Features */}
              {section.key === 'design' && train.features && (
                <>
                  <p className="text-neutral-800 bg-gray-100 bg-opacity-60 rounded p-3 shadow mb-4">This train is known for its unique design and features, making it a standout in Indian Railways. The list below highlights some of its most notable aspects.</p>
                  <ul className="list-disc list-inside text-neutral-800 pl-4 mb-4">
                    {train.features.map((feature, i) => (
                      <li key={i} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* Technical Specifications */}
              {section.key === 'specs' && train.specifications && (
                <>
                  <table className="w-full text-neutral-800 bg-gray-100 bg-opacity-80 rounded shadow mb-4">
                    <tbody>
                      {train.specifications.map((spec, i) => (
                        <tr key={i}>
                          <td className="font-semibold pr-4 py-1 align-top">{spec[0]}</td>
                          <td className="py-1">{spec[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* Operations */}
              {section.key === 'operations' && train.service && (
                <>
                  <p className="text-neutral-800 bg-gray-100 bg-opacity-60 rounded p-3 shadow mb-4">{train.service}</p>
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* Major Routes */}
              {section.key === 'routes' && train.routes && (
                <>
                  <table className="w-full text-neutral-800 bg-gray-100 bg-opacity-80 rounded shadow mb-4">
                    <thead>
                      <tr>
                        <th className="font-semibold pr-4 py-1 align-top text-left">Route</th>
                      </tr>
                    </thead>
                    <tbody>
                      {train.routes.map((route, i) => (
                        <tr key={i}>
                          <td className="py-1">{route}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* History */}
              {section.key === 'history' && train.history && (
                <>
                  <p className="text-neutral-800 bg-gray-100 bg-opacity-60 rounded p-3 shadow mb-4">{train.history}</p>
                  <hr className="my-6 border-gray-300" />
                </>
              )}
              {/* Gallery */}
              {section.key === 'gallery' && train.gallery && (
                <div className="flex gap-4 overflow-x-auto pb-2 mb-4">
                  {train.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 cursor-pointer group"
                      onClick={() => setLightboxImg(img)}
                    >
                      <img src={img} alt={train.title + ' gallery'} className="w-48 h-32 object-cover rounded shadow-lg border-2 border-blue-200 group-hover:border-blue-400 transition" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition rounded" />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
      <div className="max-w-5xl mx-auto mt-6">
        <Link to="/trains">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-7 py-2 transition duration-300 shadow-lg"
          >
            ← Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainDetail;