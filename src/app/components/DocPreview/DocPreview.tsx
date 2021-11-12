import React from 'react';
import styles from './DocPreview.module.css';

export type DocPreviewProps = {
  title: string;
  text: string;
};

export default function DocPreview({
  title,
  text,
}: DocPreviewProps): JSX.Element {
  return (
    <article>
      <a href={text} className={styles.docPreview}>
        <img
          src="src/app/components/DocPreview/document.png"
          className={styles.docIcon}
        />
        <h1>{title}</h1>
      </a>
    </article>
  );
}
