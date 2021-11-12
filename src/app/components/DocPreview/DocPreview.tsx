import React from 'react';
import styles from './DocPreview.module.css';

export default function DocPreview() {
  return (
    <section>
      <article className={styles.docPreview}>
        <img
          src="src/app/components/DocPreview/document.png"
          className={styles.docIcon}
        />
        <h1>Title</h1>
      </article>
    </section>
  );
}
