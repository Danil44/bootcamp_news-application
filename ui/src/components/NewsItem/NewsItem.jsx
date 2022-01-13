import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import styles from './NewsItem.module.css';

function NewsItem({ image, title, address, description }) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.actions}>
          <button>
            To Favorites
            {/* {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'} */}
          </button>
        </div>
      </Card>
    </li>
  );
}

NewsItem.propTypes = {};

export default NewsItem;
