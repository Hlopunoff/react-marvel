import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/page404.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <span className={styles.message}>Oops! Something wrong…</span>
      <Link to='/' className={styles.btn}>Go back</Link>
    </div>
  );
}

export default NotFoundPage;