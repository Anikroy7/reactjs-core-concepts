import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='App-link'>These are English Bands</h1>
      <EnglishBands name="Pink-floyed" guitarist="david-glamour"></EnglishBands>
      <EnglishBands name="Dream-theater" guitarist="jhon-pretucci"></EnglishBands>
      <EnglishBands name="Metalica" guitarist="girat-raw"></EnglishBands>
      <EnglishBands name="Ac/Dc" guitarist="Mike-shinda"></EnglishBands>
      <EnglishBands name="Megadeath" guitarist="blur-akline"></EnglishBands>
      <h1>These are Bangladeshi Bands</h1>
      <BengaliBands name="Artcell" vocal="lincon" guitarist="ershad"></BengaliBands>
      <BengaliBands name='Warfaze' vocal='minar' guitarist='kamal'></BengaliBands>
      <BengaliBands name='Nemesis' vocal='zohad' guitarist='maher khan'></BengaliBands>
      <BengaliBands name='Arthohin' vocal='Bass Baba sumon' guitarist='shisir'></BengaliBands>
      <BengaliBands name='Avoid rafa' vocal='rafa' guitarist='rafa'></BengaliBands>

    </div>
  );
}

function EnglishBands(props) {
  console.log(props)
  return (
    <div className='place'>
      <h1>Band-Name: {props.name}</h1>
      <h3>Singer: {props.guitarist}</h3>
    </div>
  )
}
function BengaliBands(props) {
  return (
    <section className='container '>
      <h1>Band-name: {props.name}</h1>
      <h2>Vocal: {props.vocal}</h2>
      <h2>Guitarist: {props.guitarist}</h2>
    </section>
  )
}
export default App;
