import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsList.module.css';
import NewsItem from 'components/NewsItem/NewsItem';

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map(article => (
        <NewsItem
          key={article.id}
          id={article.id}
          image={article.image}
          title={article.title}
          address={article.address}
          description={article.description}
        />
      ))}
    </ul>
  );
}

NewsList.propTypes = {};

export default NewsList;
