// src/hooks/useInsights.ts

import { useState, useEffect } from 'react';

interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

interface Article {
  author: string | null;
  title: string;
  description: string;
  url: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

interface NewsApiResponse {
  pagination: Pagination;
  data: Article[];
}

interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    context?: Record<string, any>;
  };
}

interface UseInsightsReturn {
  insights: Article[];
  loading: boolean;
  error: Error | null;
}

export function useInsights(): UseInsightsReturn {
  const [insights, setInsights] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      const API_URL = import.meta.env.VITE_NEWS_API_URL;
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      const SOURCE = import.meta.env.VITE_NEWS_API_SOURCE || 'techcrunch';
      const PAGE_SIZE = import.meta.env.VITE_NEWS_API_PAGE_SIZE || '6';

      if (!API_URL || !API_KEY) {
        setError(new Error('API URL or API Key is missing in environment variables'));
        setLoading(false);
        return;
      }

      const requestUrl = `${API_URL}?access_key=${API_KEY}&sources=${SOURCE}&limit=${PAGE_SIZE}`;

      try {
        const response = await fetch(requestUrl);
        const data = await response.json();

        if (!response.ok) {
          // Handle HTTP errors
          if (data.error) {
            throw new Error(`API Error: ${data.error.message} (${data.error.code})`);
          } else {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
          }
        }

        // Handle API-specific errors
        if ('error' in data) {
          throw new Error(`API Error: ${data.error.message} (${data.error.code})`);
        }

        const apiResponse: NewsApiResponse = data;

        setInsights(apiResponse.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return { insights, loading, error };
}
