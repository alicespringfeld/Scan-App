import React, { ChangeEvent, useState } from 'react';
import PhotoCameraIcon from './PhotoCameraIcon';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageURL(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <label htmlFor="Import" className={styles.importButton}>
      Import
      <input
        className={'input'}
        id="Import"
        style={{ visibility: 'hidden' }}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
}

export default ImageInput;
