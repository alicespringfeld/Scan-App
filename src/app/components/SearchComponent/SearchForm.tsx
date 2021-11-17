import React, { useEffect, useState } from 'react';
import styles from './SearchForm.module.css';
import SearchIcon from './SearchIcon';

type SearchFormProps = {
  onSearch: (value: string) => void;
};

export default function SearchForm({ onSearch }: SearchFormProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.length === 0) {
      return;
    }
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <form className={styles.searchForm}>
      <SearchIcon />
      <input
        value={value}
        className={styles.inputField}
        type="text"
        placeholder="search..."
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}
