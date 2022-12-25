import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase Was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleClClick = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!","success");
    }

    const handleOnChange = (event)=>{
        //console.log("OnChange");
        setText(event.target.value);
    }
    
    const [text,setText] = useState('Enter the text here');
    
    
    return (
        <>
        <div className='mb-3' style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white' , color : props.mode==='light'?'white':'black'}} id="myBox" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert To UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>

        <h1>Your Text Summary </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length  } words and {text.length} characters</p>
        {/** assuming that it take 1 minute to read 125 words on an average */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text in the TextBox to Preview It Here"}</p>
    </div>
        </>
  )
}
