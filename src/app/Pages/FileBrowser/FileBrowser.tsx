import React, { useEffect, useState } from 'react';
import getDocument from './FetchDocuments';
import styles from './FileBrowser.module.css';

type Document = {
  id: number;
  title: string;
  text: string;
};

export default function FileBrowser() {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocument();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <section>
      {documents &&
        documents.map((document) => (
          <article key={document.id} className={styles.docPreview}>
            <img
              src="src/app/components/DocPreview/document.png"
              className={styles.docIcon}
            />
            <h1>{document.title}</h1>
          </article>
        ))}
    </section>
  );
}
