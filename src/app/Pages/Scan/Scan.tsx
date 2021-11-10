import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import PhotoCameraIcon from '../../components/ImageInput/PhotoCameraIcon';
import Tesseract from 'tesseract.js';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

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
        <button
          className={styles.scan}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              Tesseract.recognize(imageURL, 'eng', {
                logger: (message) => console.log(message.progress),
              }).then((result) => {
                const text = result.data.text;
                setRecognizedText(text);
              });
            }
          }}
        ></button>
        <ImageInput onUpload={setImageURL} />
      </div>
    </div>
  );
}

export default Scan;
