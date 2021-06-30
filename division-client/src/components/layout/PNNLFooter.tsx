import React from 'react';
import styles from '../../styles/pnnlFooter.module.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PNNLFooter() {
  return (
    <div className={styles['l-footer']}>
      <div
        className={`${styles['l-constrain']} ${styles['l-constrain--narrow']}`}
      >
        <div className={styles['l-footer__top']}>
          <div className={styles['l-footer__top-first']}>
            <a
              className={styles['site-name']}
              href="https://www.pnnl.gov"
              title="Home"
              rel="home"
            >
              <h1 className={styles['site-name__text']}>PNNL</h1>
            </a>
          </div>
          <div className={styles['l-footer__top-second']}>
            <ul className={`${styles['menu']} ${styles['menu--footer']}`}>
              <li className={`${styles['menu__item']} ${styles['has-subnav']}`}>
                <span
                  className={`${styles['menu__link']} ${styles['has-subnav']}`}
                >
                  GET IN TOUCH
                </span>
                <ul className={`${styles['menu']} ${styles['menu__subnav']}`}>
                  <li className={styles['menu__item']}>
                    <a
                      href="/contacts"
                      title="Contact"
                      className={styles['menu__link']}
                      data-drupal-link-system-path="node/1281"
                    >
                      Contact
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="/careers"
                      title="Careers"
                      className={styles['menu__link']}
                      data-drupal-link-system-path="node/1270"
                    >
                      Careers
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="https://www.pnnl.gov/business/"
                      className={styles['menu__link']}
                    >
                      Doing Business
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="https://www.pnnl.gov/pnnl-annual-site-environmental-report"
                      className={styles['menu__link']}
                    >
                      Environmental Reports
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="/security-privacy"
                      title="Security &amp; Privacy"
                      className={styles['menu__link']}
                      data-drupal-link-system-path="node/1373"
                    >
                      Security &amp; Privacy
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${styles['menu__item']} ${styles['has-subnav']}`}>
                <span
                  className={`${styles['menu__link']} ${styles['has-subnav']}`}
                >
                  Research
                </span>
                <ul className={`${styles['menu']} ${styles['menu__subnav']}`}>
                  <li className={styles['menu__item']}>
                    <a
                      href="/scientific-discovery"
                      title="Scientific Discovery"
                      className={styles['menu__link']}
                      data-drupal-link-system-path="taxonomy/term/39"
                    >
                      Scientific Discovery
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="/energy-resiliency"
                      className={styles['menu__link']}
                      title="Sustainable Energy"
                    >
                      Sustainable Energy
                    </a>
                  </li>
                  <li className={styles['menu__item']}>
                    <a
                      href="/national-security"
                      title="National Security"
                      className={styles['menu__link']}
                      data-drupal-link-system-path="taxonomy/term/40"
                    >
                      National Security
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles['l-footer__top-third']}>
            <a
              href="https://share.hsforms.com/180060/2b30bb4f-b509-42d4-a9d3-082607e9cacf/?__hstc=249664665.6ddd82deffe41f94170294c57e6a3dac.1623874614510.1624043149694.1624048616767.10&amp;__hssc=249664665.12.1624048616767&amp;__hsfp=1399174360"
              className={styles['l-footer__subscribe']}
            >
              <span>Subscribe to PNNL News</span>
            </a>
          </div>
        </div>
        <div className={styles['l-footer__bottom']}>
          <div className={styles['l-footer__bottom-first']}>
            <a
              href="https://www.energy.gov/"
              className={`${styles['l-footer__logo']} ${styles['l-footer__logo--doe']}`}
            >
              <span className={styles['menu__link--text']}>
                Department of Energy Logo
              </span>
            </a>
            <a
              href="https://www.battelle.org/"
              className={styles['l-footer__logo--battelle']}
            >
              <span className={styles['menu__link--text']}>Battelle Logo</span>
            </a>
          </div>
          <div className={styles['l-footer__bottom-second']}>
            <div className={styles['copyright']}>
              Pacific Northwest National Laboratory (PNNL) is managed and
              operated by Battelle for the Department of Energy
            </div>
          </div>
          <div className={styles['l-footer__bottom-third']}>
            <ul className={`${styles['menu']} ${styles['menu--social']}`}>
              <li className={styles['menu--item']}>
                <a
                  href="http://www.youtube.com/user/PNNLgov"
                  className={`${styles['menu__link--youtube']} ${styles['menu__link']}`}
                >
                  <span className={styles['menu__link--text']}>Youtube</span>
                </a>
              </li>
              <li className={styles['menu--item']}>
                <a
                  href="http://www.facebook.com/PNNLgov"
                  className={`${styles['menu__link--facebook']} ${styles['menu__link']}`}
                >
                  <span className={styles['menu__link--text']}>Facebook</span>
                </a>
              </li>
              <li className={styles['menu--item']}>
                <a
                  href="http://twitter.com/PNNLab"
                  className={`${styles['menu__link--twitter']} ${styles['menu__link']}`}
                >
                  <span className={styles['menu__link--text']}>Twitter</span>
                </a>
              </li>
              <li className={styles['menu--item']}>
                <a
                  href="https://www.instagram.com/pnnlab"
                  className={`${styles['menu__link--instagram']} ${styles['menu__link']}`}
                >
                  <span className={styles['menu__link--text']}>Instagram</span>
                </a>
              </li>
              <li className={styles['menu--item']}>
                <a
                  href="https://www.linkedin.com/company/pacific-northwest-national-laboratory"
                  className={`${styles['menu__link--linkedin']} ${styles['menu__link']}`}
                >
                  <span className={styles['menu__link--text']}>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
