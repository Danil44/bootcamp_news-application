import Navigation from 'components/Navigation/Navigation';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}

export default Layout;
