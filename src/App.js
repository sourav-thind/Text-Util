
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React , {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

}from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // tells us whether dark mode is enabled or not
  const [alert, setAlert]= useState(null); 
  const showAlert =(message,type)=>{
    
   setAlert({
  
     msg: message,
     type: type
   }) 
   setTimeout(() => {
    setAlert(null);
   }, 3000);
  }
const removeBgClasses = () => {
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
}

 const  toggleMode = (cls)=>{
  removeBgClasses()
  console.log(cls);
  document.body.classList.add('bg-'+cls)
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor  = '#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>  

 <Router>
 <Navbar title="TextUtils" about="About US" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
  
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  />} />
          
          <Route exact path="/about" element={<About mode={mode}/>}/>
         
        </Routes>
 
    </Router>

 
    </>
  );
}

export default App;