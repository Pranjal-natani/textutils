import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        prevSetText(text);
        // console.log("UpperCase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");

    }
    const handleLoClick=()=>{
        prevSetText(text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");

    }
    const handleClClick=()=>{
        prevSetText(text);
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared", "success");

    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUndoClick=()=>{
        setText(prevText);
        props.showAlert("Undo Performed", "success");
    }
    const handleCopyClick=()=>
    {
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied", "success");
    }
    const[text, setText]=useState("");
    const[prevText,prevSetText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
         <h5>{props.heading}</h5>
          <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleUndoClick}>Undo</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h5> Your Text Summary</h5>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h6>Preview</h6>
        <p>{text.length>0?text:'Enter the Text in Text Area to Preview it'}</p>
    </div>
    </>
  )
}
