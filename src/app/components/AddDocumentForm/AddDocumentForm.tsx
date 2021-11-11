import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from './UseDocument';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');

  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const document = {
      title,
      text,
    };
    await postDocument(document);

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.documentForm}
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className={styles.submitButton}
        type="submit"
        value="Save"
        disabled={!title || isLoading}
      />
    </form>
  );
}

export default AddDocumentForm;
