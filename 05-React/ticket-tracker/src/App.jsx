import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Info from "./components/Info/Info";

import team from "./team.js";

const App = () => {
  return (
    <>
      <NavBar />
      <Info />
      <section className={styles.cardContainer}>
        {team.map((team) => (
          <Card teamData={team} />
        ))}
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
