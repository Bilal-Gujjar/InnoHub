import { useState, useEffect } from 'react';

interface Source {
  id: string | null;
  name: string;
}

interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface UseInsightsReturn {
  insights: Article[];
  loading: boolean;
  error: Error | null;
  imageLoading: boolean;
}

export function useInsights(): UseInsightsReturn {
  const [insights, setInsights] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsights = async () => {
      const API_URL = import.meta.env.VITE_NEWS_API_URL;
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      const SOURCE = import.meta.env.VITE_NEWS_API_SOURCE || 'techcrunch';
      const PAGE_SIZE = import.meta.env.VITE_NEWS_API_PAGE_SIZE || '3';

      if (!API_URL || !API_KEY) {
        setError(new Error('API URL or API Key is missing in environment variables'));
        setLoading(false);
        return;
      }

      const requestUrl = `${API_URL}?sources=${SOURCE}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`;

      try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch insights: ${response.status} ${response.statusText}`);
        }

        const data: NewsApiResponse = await response.json();

        if (data.status !== 'ok') {
          throw new Error(`API error: ${data.status}`);
        }

        setInsights(data.articles);
        setImageLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return { insights, loading, error, imageLoading };
}
