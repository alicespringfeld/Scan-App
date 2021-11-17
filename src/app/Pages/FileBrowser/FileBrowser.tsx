import React, { useState } from 'react';
import SearchForm from '../../components/SearchComponent/SearchForm';
import styles from './FileBrowser.module.css';
import useDocuments from '../../utils/useDocuments';

export default function FileBrowser(): JSX.Element {
  const [search, setSearch] = useState('');
  const documents = useDocuments(search);

  return (
    <section>
      <SearchForm onSearch={setSearch} />
      <div>
        {!documents && <span>Loading...</span>}
        {documents?.length === 0 && <span>No documents</span>}

        {documents?.map((document) => (
          <article key={document.id} className={styles.docPreview}>
            <img
              src="src/app/components/DocPreview/document.png"
              className={styles.docIcon}
            />
            <h1>{document.title}</h1>
          </article>
        ))}
      </div>
    </section>
  );
}
