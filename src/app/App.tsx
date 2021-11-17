import React from 'react';
import styles from './App.module.css';
import Scan from './Pages/Scan/Scan';

function App(): JSX.Element {
  return (
    <main className={styles.main}>
      <Scan />
    </main>
  );
}

export default App;
