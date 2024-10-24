import logo from './logo.svg';
import './App.css';

let name = "Manni!!";
function App() {
  return (
    <>
        <nav>
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
        </nav>
        
        <div className="container">
          <h1>Hello {name}</h1>
        </div>
    </>
    //<div className="blank">Lovely</div>
  );
}
export default App;
