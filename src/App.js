
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = "welcome to the new world";
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="content">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
