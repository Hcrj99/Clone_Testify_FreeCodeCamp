import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <section className='main__container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Person />
      </section>
    </div>
  );
}

export default App;
