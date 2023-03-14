import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark shadow bg-${props.cls==='dark'? '#042743' : props.cls} `} >
    <div className="container-fluid" >
      <Link className="navbar-brand" style={{color: props.cls==='light'?'black':'white'}} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" style={{color: props.cls==='light'?'black':'white'}} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{color: props.cls==='light'?'black':'white'}} to="/about">{props.about}</Link>
          </li>
        
          
        </ul>
          <div className="d-flex">
          <div className='bg-primary rounded mx-2 border' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px' , width:'30px'}}></div>
          <div className="bg-danger rounded mx-2 border" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px' , width:'30px'}}></div>
          <div className="bg-success rounded mx-2 border" onClick={()=>{props.toggleMode('success')}} style={{height:'30px' , width:'30px'}}></div>
          <div className="bg-warning rounded mx-2 border" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px' , width:'30px'}}></div>
          <div className="bg-light rounded mx-2 border" onClick={()=>{props.toggleMode('light')}} style={{height:'30px' , width:'30px'}}></div>
          <div className="bg-dark rounded mx-2 border" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px' , width:'30px'}}></div>
         
 
        

          </div>
          {/* <div className={`form-check form-switch my-3 mx-2 text-${props.mode==='light'?'dark':'light'} `} >
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode()}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}

        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string
}
Navbar.defaultProps = {
    title : 'Set Title Here',
    about : 'Write about Here'
}