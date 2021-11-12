import React from 'react';
import DocPreview, {
  DocPreviewProps,
} from '../../components/DocPreview/DocPreview';
import styles from './FileBrowser.module.css';

export default function FileBrowser({
  text,
  title,
}: DocPreviewProps): JSX.Element {
  return (
    <div className={styles.browserPage}>
      <DocPreview text={text} title={title} />
    </div>
  );
}
