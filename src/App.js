import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Destination></Destination>
      <Destination></Destination>
      <Destination></Destination>


      <h1>This is a New destination</h1>

      <NewDestination></NewDestination>
      <NewDestination></NewDestination>
      <NewDestination></NewDestination>

    </div>
  );
}
function Destination() {
  return (
    <div className='place'>
      <h2>Name: Kolkata</h2>
      <h4>Place: Haora Bridge</h4>
    </div>
  )
}
function NewDestination() {
  return (
    <section className='container'>
      <h2>Name: kashmir</h2>
      <h2>Place: Gulmarg</h2>
    </section>
  )
}
export default App;
