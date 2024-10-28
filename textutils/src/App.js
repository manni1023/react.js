import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    
  }

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is alert"/>
      <div className="container my-3"/>
      <TextForm heading="Enter the text to analyze below" mode ={mode}/>
      {/* <About/> */}
    </>
  );
}
export default App;
