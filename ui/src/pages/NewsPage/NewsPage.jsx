import { useState, useEffect } from 'react';
import news from 'mocks/news.json';

import NewsList from 'components/NewsList/NewsList';

function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  //   const [news, setNews] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All News</h1>
      <NewsList news={news} />
    </section>
  );
}

export default NewsPage;
