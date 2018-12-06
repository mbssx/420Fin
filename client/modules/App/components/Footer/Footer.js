import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';


export function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 420 Financial Managment; 420 Financial Managment LLC.</p>
      <p className="right">Login</p>
    </div>
  );
}

export default Footer;
