import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import PhotoCameraIcon from '../../components/ImageInput/PhotoCameraIcon';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div>
      <h1 className={styles.header}>ScanApp</h1>
      {imageURL ? (
        <img src={imageURL} className={styles.preview} />
      ) : (
        <PhotoCameraIcon />
      )}
      <div className={styles.container}>
        <a href="#" className={styles.cancelButton}>
          CANCEL
        </a>
        <button className={styles.scan} disabled={imageURL === null}></button>
        <div>
          <ImageInput onUpload={setImageURL} />
        </div>
      </div>
    </div>
  );
}

export default Scan;
