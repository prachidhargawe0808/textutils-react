import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }


  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor= 'grey';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor= 'white';
        showAlert("Dark mode has been disabled", "success");
        document.title = 'TextUtils - Light Mode'
      } 
        
  }

  return (
    <>

    <Navbar title="TextUtils" home= "Home" mode={mode} aboutTextUtils="About TextUtils" searchBar="Search" toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
             <TextForm showAlert={showAlert} heading="Enter text to analyse below" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
