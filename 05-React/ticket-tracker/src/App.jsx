import styles from "./App.module.scss";

const App = () => {
  return <p className={styles.para}>App works</p>;
};

export default App;

// 1. Change title in public/index.html
// 2. Rename src/App.js => App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install sass ('npm install sass' in directory)
// 7. Rename App.css => App.module.css & change import
