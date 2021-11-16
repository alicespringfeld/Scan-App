import { useEffect, useState } from 'react';

type Document = {
  id: number;
  title: string;
  text: string;
};

export default function useDocuments(search: string): Document[] | null {
  const [documents, setDocuments] = useState<Document[] | null>(null);

  useEffect(() => {
    fetch(`https://json-server.machens.dev/docs?q=${search}`)
      .then((response) => response.json())
      .then(setDocuments);
  }, [search]);
  return documents;
}
