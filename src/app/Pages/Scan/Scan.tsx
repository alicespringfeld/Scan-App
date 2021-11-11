import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import PhotoCameraIcon from '../../components/ImageInput/PhotoCameraIcon';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecogniseText';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  let content;

  if (text) {
    content = <p className={styles.recognizedText}>{text}</p>;
  } else if (imageURL) {
    content = <img src={imageURL} className={styles.preview} />;
  } else {
    content = (
      <>
        <h1 className={styles.header}>ScanApp</h1>
        <PhotoCameraIcon />
      </>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {content}

      <div className={styles.container}>
        <a href="#" className={styles.cancel}>
          Cancel
        </a>
        {text && <AddDocumentForm text={text} />}

        {!text && progress && (
          <Progress
            progress={progress.progress * 100}
            status={progress.status}
          />
        )}

        {!progress && (
          <button
            className={styles.scan}
            disabled={imageURL === null}
            onClick={() => {
              if (imageURL) {
                recognize(imageURL);
              }
            }}
          ></button>
        )}
        <ImageInput onUpload={setImageURL} />
      </div>
    </div>
  );
}

export default Scan;
