import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'http://localhost:1337/api/banners?populate=*'
        );
        console.log("API Cevabı:", response.data);
        setBanners(response.data.data);
      } catch (error) {
        console.error('API Hatası:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div className="w-full">
    <div className="container mx-auto py-4">
      {banners.map((banner) => (
        <div key={banner.id} className="relative bg-white rounded-md shadow-md max-w-6xl mx-auto overflow-hidden">
          {banner.image?.url && (
            <img
              src={`http://localhost:1337${banner.image.url}`}
              alt={banner.header}
              className="object-cover w-full h-full"
            />
          )}
          <div className="absolute bottom-0 left-0 p-6 bg-opacity-75 rounded-tr-md"> 
            <h2 className="text-sm font-bold text-yellow-300">{banner.header}</h2>
            <p className="text-white text-2xl font-bold mt-2">{banner.desc}</p>
            {banner.title && banner.title.map((item, index) => (
              <p key={index} className="text-white font-semibold mt-1">
                {item.children.map((child, i) => child.text).join('')}
              </p>
            ))}
            {banner.buttonLink && (
              <div className="mt-4">
                <Link to={`/${banner.buttonLink}`} className="inline-block px-6 py-3 bg-white text-black rounded-2xl hover:bg-green-600 font-semibold text-md">
                  {banner.buttonLink}
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

export default Banner;