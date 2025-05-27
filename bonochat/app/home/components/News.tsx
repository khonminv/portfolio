'use client';

import React, { useEffect, useState } from 'react';

interface NewsItem {
  idx: number;
  text: string;
  date: string;
}

function News() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [data, setData] = useState<NewsItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/data/data.json')
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result.news);
            setError(null);
          },
          (error: Error) => {
            setIsLoaded(true);
            setError(error);
            setData([]);
          }
        );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return (
      <div className="news_list">
        <div className="loading">
          <img src="/images/loading.gif" alt="loading" />
        </div>
      </div>
    );
  }

  return (
    <div className="news_list">
      <ul>
        {data.map((d) => (
          <li key={d.idx}>
            <a href="#">{d.text}</a>
            <span>{d.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
