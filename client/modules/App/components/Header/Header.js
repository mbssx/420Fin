//import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
    );
      return (
            <nav>
              <div className="nav-wrapper green darken-1">
                <Link to="/" className="brand-logo">Logo</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/donate">Donate</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li>
                    <form>
                      <div className="input-field">
                      <input id="search" type="search" required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                      </div>
                    </form>
                  </li>
                </ul>

                  
              </div>
                  <ul className="sidenav" id="mobile-demo">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </nav>
      );
  }


Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;