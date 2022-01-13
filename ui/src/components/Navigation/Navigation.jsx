import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://goit.ua/wp-content/themes/2/images/Layer.png"
          alt=""
        />{' '}
        News
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All News</Link>
          </li>
          <li>
            <Link to="/new-article">Add Arcticle</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
