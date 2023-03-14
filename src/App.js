
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
  //const [mode, setMode] = useState("light"); // tells us whether dark mode is enabled or not
  const [cls, setcls]= useState("light"); 
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

  
    switch ( cls)
{
  
   case "dark":
    
    setcls("dark");
   // document.body.style.backgroundColor = '#042743';
   //document.body.style.textDecorationColor='#000000';
      showAlert(" Dark Mode has been Enabled","success");
      break;
   case "light":
    
    setcls("light");
      document.body.style.backgroundColor  = 'white';
      document.body.style.textDecorationColor = "#000000";
      showAlert(" Light Mode has been Enabled","success");
      break;
   case "primary":
      setcls('primary')
      showAlert(" Blue Mode has been Enabled","success");
      break;
   case "danger":
    
    setcls('danger')
      showAlert(" Red Mode has been Enabled","success");
      break;
   case "warning":
    setcls("warning")
      showAlert(" Yellow Mode has been Enabled","success");
      break;
   case "success":
    setcls("success")
      showAlert(" Green Mode has been Enabled","success");
      break;

   default: 
       alert('Default case');
}
  }
  return (
    <>  

 <Router>
 <Navbar title="TextUtils" about="About US" cls={cls} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
  
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  cls={cls}  />} />
          
          <Route exact path="/about" element={<About  cls={cls}/>}/>
         
        </Routes>
 
    </Router>

 
    </>
  );
}

export default App;