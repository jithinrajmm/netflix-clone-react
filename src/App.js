
import './App.css';
import Row from './Row'
import requests from './requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* navbar component*/}
      <Nav />

      {/* banner component */}
    <Banner />
      
      {/* creating the row components */}
      <Row
        title='NETFLIX ORGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge = {true}
      />
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumantaries} />


    </div>
  );
}

export default App;
