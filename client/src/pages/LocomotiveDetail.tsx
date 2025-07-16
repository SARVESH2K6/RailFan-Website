import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Locomotive {
  _id: string;
  type: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  specs?: Record<string, string | number>;
  gallery?: string[];
  classes?: { name: string; description: string }[];
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
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-white py-16">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-16">{error}</div>;
  if (!locomotive) return null;

  return (
    <div className="min-h-screen bg-neutral-800 py-8 px-2 md:px-8 font-['Merriweather',serif]">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-95 rounded-lg shadow-lg p-6 md:p-12 relative flex flex-col md:flex-row">
        {/* Infobox */}
        <aside className="md:w-1/3 w-full md:ml-8 md:order-2 mb-8 md:mb-0 md:sticky md:top-8 self-start">
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
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Introduction</h2>
            <p className="text-neutral-800">{locomotive.longDescription || locomotive.description}</p>
          </section>

          <section id="history" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">History</h2>
            <p className="text-neutral-800">[Add a detailed history of this locomotive here. You can expand the Locomotive model to include a history field for more content.]</p>
          </section>

          <section id="specs" className="mb-8">
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

          <section id="service" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Service</h2>
            <p className="text-neutral-800">[Describe the service history, routes, and notable trains hauled by this locomotive.]</p>
          </section>

          <section id="preservation" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Preservation</h2>
            <p className="text-neutral-800">[List preserved units, museums, and heritage runs if any.]</p>
          </section>

          <section id="gallery" className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900">Gallery</h2>
            {locomotive.gallery && locomotive.gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locomotive.gallery.map((img, idx) => (
                  <div key={idx} className="bg-gray-100 rounded shadow p-2 flex flex-col items-center">
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover rounded mb-2" />
                    <span className="text-xs text-gray-600">Image {idx + 1}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-800">No gallery images available.</p>
            )}
          </section>

          <section id="references" className="mb-8">
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