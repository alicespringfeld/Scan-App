import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import PhotoCameraIcon from '../../components/ImageInput/PhotoCameraIcon';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.mainContainer}>
      {imageURL ? (
        <img src={imageURL} className={styles.preview} />
      ) : (
        <>
          <h1 className={styles.header}>ScanApp</h1>
          <PhotoCameraIcon />
        </>
      )}
      <div className={styles.container}>
        <a href="#" className={styles.cancel}>
          Cancel
        </a>
        <button className={styles.scan} disabled={imageURL === null}></button>
        <ImageInput onUpload={setImageURL} />
      </div>
    </div>
  );
}

export default Scan;
