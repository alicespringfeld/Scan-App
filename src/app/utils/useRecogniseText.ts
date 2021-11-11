import { useState } from 'react';
import { RecognizeProgress, recognizeText } from './ocr';

export default function useRecognizeText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = (imageURL: string) => {
    recognizeText(imageURL, setProgress).then(setText);
  };
  return { text, progress, recognize };
}
