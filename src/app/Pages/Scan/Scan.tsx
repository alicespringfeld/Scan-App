import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import PhotoCameraIcon from '../../components/ImageInput/PhotoCameraIcon';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  let content;

  if (recognizedText) {
    content = <p>{recognizedText}</p>;
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
        {recognizedText && <AddDocumentForm text={recognizedText} />}

        {!recognizedText && recognizeProgress && (
          <Progress
            progress={recognizeProgress.progress * 100}
            status={recognizeProgress.status}
          />
        )}

        {!recognizeProgress && (
          <button
            className={styles.scan}
            disabled={imageURL === null}
            onClick={() => {
              if (imageURL) {
                recognizeText(imageURL, setRecognizeProgress).then(
                  setRecognizedText
                );
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
