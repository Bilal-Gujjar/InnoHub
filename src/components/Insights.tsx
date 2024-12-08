// src/components/Insights.tsx

import { useInsights } from '../hooks/useInsights';
import { Loader2 } from 'lucide-react';

export function Insights() {
  const { insights, loading, error } = useInsights();

  if (error) {
    return (
      <section id="insights" className="py-20 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
          <p className="text-center text-red-600">{error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="insights" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((article) => (
              <article
                key={article.url} // Using URL as a unique key
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {article.image ? (
                  <div className="relative w-full h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.src = '/fallback-image.jpg'; // Ensure this image exists
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <div className="mt-auto">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700 transition"
                    >
                      Read More →
                    </a>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    {new Date(article.published_at).toLocaleDateString()}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
