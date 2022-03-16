import logo from './logo.svg';
import './App.css';

const places = ['paharpur', 'altadighi', 'potishor', 'kusumba-mosjid', 'taltoli-bil']
const cityDetail = {
  name: 'Naogaon',
  postCode: 6500,
  thana: 11
}
const placesStyle = {
  color: 'red',
  backgroundColor: 'yellow',
  padding: "10px",
  borderRadius: '20px'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Now i am exploring JSX</h1>
        <p>I am a musician</p>
        <div className="container">
          <h1>This is Bangladesh</h1>
          <p>city: {cityDetail.name} </p>
          <p>post-code:{cityDetail.postCode}</p>
          <p>Thana:{cityDetail.thana}</p>
        </div>
        <div>
          <p style={placesStyle}>Tour places:{places[3]}</p>
          <p style={{
            color: 'red',
            backgroundColor: 'white',
            padding: "10px",
            borderRadius: '20px'
          }}>My favourite place: {places[0]}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
