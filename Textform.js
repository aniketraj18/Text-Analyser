import React,{useState} from 'react'

export default function Textform(props) {
    const UpClick=()=>{
        // console.log("Button was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const LowClick=()=>{
      // console.log("Button was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
  }
  const ClrClick=()=>{
    // console.log("Button was clicked"+text);
    let newText="";
    setText(newText);
}
    const handleOnChange=(event)=>{
        // console.log("Button was clicked");
        setText(event.target.value);
    }
    const NoVowels=()=>{
      let count=0;
      let ntext=text.toLowerCase();
      for(let i=0;i<ntext.length;i++){
        if(ntext.charAt(i)==='a'||ntext.charAt(i)==='e'||ntext.charAt(i)==='i'||ntext.charAt(i)==='o'||ntext.charAt(i)==='u')
        count++;
      }
      return count;
    }
    const[text,setText]=useState("");
  return (
    <>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
 <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3b506e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary " onClick={UpClick}>To Uppercase</button>
 <button className="btn btn-primary mx-4" onClick={LowClick}>To Lowercase</button>
 <button className="btn btn-primary mx-4" onClick={ClrClick}>Clear Text</button>
 {/* <button className="btn btn-primary mx-4" onClick={NoVowels}>Vowel Count</button> */}
</div>
<div className="container my-4 " style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p><b>{text.split(" ").length} words , {text.length} characters</b></p>
  <p><b>{0.008*text.split(" ").length} minutes to read </b></p>
  <p><b>{NoVowels()}</b> Vowels</p>
  <h2>Preview:</h2>
  <p>{text}</p>
</div>
</>
  )
}
