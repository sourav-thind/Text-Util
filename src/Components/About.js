import React from 'react'

export default function About(props) {
    ///////////////////////////////////////////////////////////////////////////////
    //this is for individual button but now we are combining it with toggle button
    ///////////////////////////////////////////////////////////////////////////////
    // const [myStyle, setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black',
       
    // })
    // const [btnText, SetBtnText] =useState("Enable Dark Mode");
 
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color=== 'white'){
    //        setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
              
    //          })
    //          SetBtnText("Enable Dark Mode");
    //      }
    //      else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
               
    //          })
    //          SetBtnText("Enable Light Mode");
    //      }
    // }
  return (

    <div style={{backgroundColor: props.mode==='light'?'white':'#042743' , color : props.mode==='light'?'black':'white'}}>
        <h1>About US</h1>
        <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='light'?'black':'white' , color : props.mode==='light'?'white':'black'}}>
            
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'black':'white' , color : props.mode==='light'?'white':'black'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black' , color : props.mode==='light'?'black':'white'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?'black':'white' , color : props.mode==='light'?'white':'black'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black' , color : props.mode==='light'?'black':'white'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'?'black':'white' , color : props.mode==='light'?'white':'black'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'black' , color : props.mode==='light'?'black':'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
       {/* this button is the individul dark mode button but it is hidden now */}
      {/* <button onClick={toggleStyle} className="btn" style={myStyle} >{btnText}</button>  */}

    </div>
  )
}
