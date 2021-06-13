import React from 'react';
import {A} from '../elements';
import YeeHanChung from '../img/yee-han-chung.jpeg';
import styles from '../styles/author.module.scss';

export function Author() {
  return (
    <div className={styles.person}>
      <img
        src={YeeHanChung}
        alt={'Yee Han Chung'}
        className={styles.img}
        loading="lazy"
      />
      <div className={styles.intro}>
        <div className={styles.subtitle}>
          <h3 className={styles.name}>{'Yee Han Chung'}</h3>
          <p style={{marginBottom: '0.5rem'}}>{'Software Engineer'}</p>
          {/* <p style={{marginBottom: '0.5rem'}}>
            My web development stuff is kept on{' '}
            <A
              href="https://yeehan.dev/"
              rel="noopener noreferrer"
              target="">
              yeehan.dev
            </A>
            .
          </p> */}
          <div style={{marginBottom: '0.5rem'}}>
            <A
              href="https://github.com/cyeehan"
              rel="noopener noreferrer"
              target="">
              GitHub
            </A>{' '}
            |{' '}
            <A
              href="https://www.linkedin.com/in/cyeehan/"
              rel="noopener noreferrer"
              target="">
              LinkedIn
            </A>{' '}
            |{' '}
            <A href="https://yeehan.dev/" rel="noopener noreferrer" target="">
              yeehan.dev
            </A>
          </div>
          {/* <p>🇲🇾 +6 017 857 8815</p>
          <p>🇸🇬 +65 8790 8815</p> */}
        </div>
      </div>
    </div>
  );
}
