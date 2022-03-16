import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className='App'>
      <Counter></Counter>

    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(12);
  const Increase = () => setCount(count + 1);
  const Decrease = () => setCount(count - 1);

  /* function Increase() {
    const newCount = count + 1;
    setCount(newCount);
  }
 */
  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={Increase}>+</button>
      <p></p>
      <button onClick={Decrease}>-</button>
    </div>
  )
}


export default App;


// react core concepts

/* const tourPlaces = ['cox-bazar', 'bandorbon', 'kolkata', 'birvum', 'tamil-naru', 'panjab', 'sona-gachi', 'kashmir']
const countries = [
  { name: 'Bangladesh', capital: 'Dhaka', area: 'asia' },
  { name: 'India', capital: 'Dehlli', area: 'asia' },
  { name: 'U.S.A', capital: 'new-york', area: 'urope' },
  { name: 'Bangladesh', capital: 'Dhaka', area: 'asia' },
  { name: 'India', capital: 'Dehlli', area: 'asia' },
  { name: 'U.S.A', capital: 'new-york', area: 'urope' },
  { name: 'Bangladesh', capital: 'Dhaka', area: 'asia' },
  { name: 'India', capital: 'Dehlli', area: 'asia' },
  { name: 'U.S.A', capital: 'new-york', area: 'urope' },

]
function App() {
  return (
    <div className="App">
      {
        tourPlaces.map(place => <DisplayPlaces name={place}></DisplayPlaces>)
      }
      {
        countries.map(country => <DisplayCountries name={country.name} capital={country.capital} area={country.area}></DisplayCountries>)
      }
    </div>
  );
}

function DisplayPlaces(props) {
  return (
    <div className='place'>
      <h1>name: {props.name}</h1>
    </div>
  )
}
function DisplayCountries(props) {
  console.log(props)
  return (
    <div className='container'>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
      <p>Area: {props.area}</p>
    </div>
  )
} */