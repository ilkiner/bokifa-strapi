import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('/api/collections?populate=*');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCollections(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) return <div>Download...</div>;
  if (error) return <div>err: {error.message}</div>;

  return (
    <div className="flex justify-center py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white rounded-md shadow-md overflow-hidden">
            {collection.image?.url && (
              <div className="relative aspect-w-1 aspect-h-1 w-60 h-78 overflow-hidden rounded-md">
                <img
                  src={`http://localhost:1337${collection.image.url}`}
                  alt={collection.header}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{collection.header}</h4>
              <p className="text-gray-700">{collection.desc}</p>
              {collection.buttonLink && (
                <div className="mt-4">
                  <Link
                    to={`/${collection.buttonLink}`}
                    className="inline-block px-6 py-3 bg-white text-black rounded-2xl hover:bg-green-600 font-semibold text-md"
                  >
                    {collection.buttonLink}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
