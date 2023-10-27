import logo from './logo.svg';
import './App.css';
import Registerstion from './Components/Registerstion';
import Login from './Components/Login';
import AdditionalDetails from './Components/AdditionalDetails';
function App() {
  return (
    <div className="App">
      <Registerstion></Registerstion>
      <Login></Login>
      <AdditionalDetails></AdditionalDetails>
  
    </div>
  );
}

export default App;
