import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import data from './data'

function App() {
  const travelData = data.map(item => {
    return(
      <Hero
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div className="App">
     <Nav />
     <section className="hero-list">
      {travelData}
     </section>
    </div>
  );
}

export default App;
