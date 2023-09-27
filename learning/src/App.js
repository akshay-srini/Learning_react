import './App.css';
import Navbar from './Components/Navbar'
import Data from './Components/Data'
import Hero from './Components/Hero'
function App() { 
  const dataItem = Data.map(item => {
    return [
      <Hero {...item} />
    ]
    
  })

  return (
    <div className='card'>
      <Navbar />
      {dataItem}
    </div>
  );
}

export default App;

