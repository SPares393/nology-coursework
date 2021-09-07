import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <NavBar />
      <section class={styles.cardRow}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default App;

///// REQUIREMENTS /////
// Create the components you think you will need (at least an employee component, possibly more)
// Map over the data below to create the components
// Pass data into them via props
// Use State to handle the increment and decrement of tickets
// Style it however you like, but don’t leave it blank
