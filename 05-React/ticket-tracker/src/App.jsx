import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <section>
        <div>
          <h2>Employee Name</h2>
          <h3>Employee Role</h3>
          <div>
            <h3>Tickets</h3>
            <h2>0</h2>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

///// REQUIREMENTS /////
// Create the components you think you will need (at least an employee component, possibly more)
// Map over the data file below to create the components
// Pass data into them via props
// Use State to handle the increment and decrement of tickets
// Style it however you like, but don’t leave it blank
