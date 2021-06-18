import React from 'react';
import styles from '../../styles/pnnlHeader.module.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PNNLHeader() {
  return (
    <div className={styles['.layout-container']}>
      <header className={styles['l-header']} role="banner">
        <div className={styles['l-constrain']}>
          <div className={styles['l-header__primary']}>
            <div className={styles['l-header__logo']}>
              <a
                className={styles['site-name']}
                href="https://www.pnnl.gov"
                title="Home"
                rel="home"
              >
                <h1 className={styles['site-name__text']}>PNNL</h1>
              </a>
            </div>
            <div className={styles['l-header__primary-right']}>
              <div className={styles['l-header__utility']}>
                <ul className={styles['menu--utility']}>
                  <li className={styles['menu__item']}>
                    <a
                      href="https://www.pnnl.gov/about"
                      title="About"
                      className={styles['menu__link']}
                    >
                      About
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="https://www.pnnl.gov/news"
                      title="News"
                      className={styles['menu__link']}
                    >
                      News & Media
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="https://www.pnnl.gov/careers"
                      title="Careers"
                      className={styles['menu__link']}
                    >
                      Careers
                    </a>
                  </li>
                  <li className={styles['menu__item_wo-border']}>
                    <a
                      href="https://www.pnnl.gov/events"
                      title="Events"
                      className={styles['menu__link']}
                    >
                      Events
                    </a>
                  </li>
                </ul>
                <div className={styles['l-header__search']}>
                  <div className={styles['site-search']}>
                    <form
                      className={styles.form}
                      action="https://google.com/search"
                      method="get"
                    >
                      <input
                        type="hidden"
                        name="sitesearch"
                        value="*.pnnl.gov"
                      />
                      <input
                        className={styles['textfield']}
                        type="text"
                        id="edit-keywords"
                        name="q"
                        placeholder="SEARCH"
                      />
                      <input
                        className={styles['submit']}
                        type="submit"
                        value="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
