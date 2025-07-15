import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LocomotiveDetail, { LocomotiveDetailProps } from './LocomotiveDetail';

export default function LocomotivePage() {
  const { slug } = useParams();
  const [data, setData] = useState<LocomotiveDetailProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(null);
    setError(null);
    fetch(`/api/locomotives/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(setData)
      .catch(() => setError('Locomotive not found.'));
  }, [slug]);

  if (error) return <div className="text-center text-red-400 py-20">{error}</div>;
  if (!data) return <div className="text-center text-white py-20">Loading...</div>;
  return <LocomotiveDetail {...data} />;
} 