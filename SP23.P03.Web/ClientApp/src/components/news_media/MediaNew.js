import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ imageUrl, title, description, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">
          <Link to={url}>{title}</Link>
        </h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const NewsSection = ({ newsList }) => {
  return (
    <section className="my-16 container mx-auto">
      <h1 className="text-4xl font-bold mb-12">News & Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <NewsCard
            key={news.id}
            imageUrl={news.imageUrl}
            title={news.title}
            description={news.description}
            url={news.url}
          />
        ))}
      </div>
    </section>
  );
};

const NewsMediaPage = () => {
  const newsList = [
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/random/800x600',
      title: 'Entrack introduces new express train service',
      description:
        'Entrack has announced the launch of its new express train service, which promises faster and more comfortable travel for passengers.',
      url: '/news/1',
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/7/800x600',
      title: 'Entrack partners with local food vendors for on-board meals',
      description:
        'Entrack has teamed up with several local food vendors to offer a wider range of meal options for passengers on its trains.',
      url: '/news/2',
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/random/800x600',
      title: 'Entrack launches mobile app for easier ticket booking',
      description:
        'Entrack has released a new mobile app that allows passengers to easily book train tickets and access real-time travel information.',
      url: '/news/3',
    },
  ];

  return (
    <div>
      <NewsSection newsList={newsList} />
    </div>
  );
};

export default NewsMediaPage;