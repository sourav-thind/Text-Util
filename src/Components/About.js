import React from 'react';

export default function About(props) {
    ///////////////////////////////////////////////////////////////////////////////
    //this is for individual button but now we are combining it with toggle button
    ///////////////////////////////////////////////////////////////////////////////
    // const [myStyle, setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black',
       
    // })
    // const [btnText, SetBtnText] =useState("Enable Dark cls");
 
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color=== 'white'){
    //        setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
              
    //          })
    //          SetBtnText("Enable Dark cls");
    //      }
    //      else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
               
    //          })
    //          SetBtnText("Enable Light cls");
    //      }
    // }
  return (
<div className="mx-5 ">
    <div className='mt-2 ' >
        <h1 style={{color: props.cls==='light'?'black':'white'}}>About US</h1>
        <div className="accordion" id="accordionExample" style={{backgroundColor: props.cls==='light'?'black':'white' , color : props.cls==='light'?'white':'black'}}>
            
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.cls==='light'?'black':'white' , color : props.cls==='light'?'white':'black'}}>
        About The Application
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.cls==='light'?'white':'black' , color : props.cls==='light'?'black':'white'}}>
        <strong>Text Utility Application</strong> This a text utility application where user can convert the text in uppercase, lowercase and if there is any extra space they can remove it too, They can copy the text in the textbox. Also there is a button to clear the textbox too. After transforming the text Page shows a message that the text has been modify. The text is previewed at the bottom most part of the Page. Well you are already here so I shouldn't describe About Page, apart from the fact that Accordian was used here.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.cls==='light'?'black':'white' , color : props.cls==='light'?'white':'black'}}>
       Additional functionality
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.cls==='light'?'white':'black' , color : props.cls==='light'?'black':'white'}}>
       Apart from that, this application can also count words and characters, could be helpful in assignments too. Another thing is that it can also calculate the time a normal human being can take to read it, its not that accurate as it may differ from person to person and according to length of a word, so average speed is taken into context. Also, I tried to take it further from all this and impose colour theme thing here, Although I spent so much time that It tried to make me color blind but I succed at last.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed " type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.cls==='light'?'black':'white' , color : props.cls==='light'?'white':'black'}}>
        Resources used and about Developer
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body " style={{backgroundColor: props.cls==='light'?'white':'black' , color : props.cls==='light'?'black':'white'}}>
        This React application is developed by Souravpreet Singh, currently studying in Sheridan College, will graduate in April,2024(not 100% sure but lets hope so). ReactJS is the main framework used in developing this application. React-Hooks like useState, React-Dom-Router and a hell lot of Javascript is used. NodeJs was also partner in crime here. Styling department was handled by Mr. Bootstrap. For the weird combination of characters called code <a href="https://github.com/sourav-thind/Text-Util">CLICK HERE</a>. 
      </div>
    </div>
  </div>
</div>
       {/* this button is the individul dark cls button but it is hidden now */}
      {/* <button onClick={toggleStyle} className="btn" style={myStyle} >{btnText}</button>  */}

    </div>
    </div>
  )
}
