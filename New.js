import React,{useState} from 'react'
export default function New(props) {
 
  const handleUpClick =()=>{
    console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("converted to uppercase","sucess") ; 
    
    
  }
  const handleLoClick =()=>{
    console.log("uppercase was clicked" + text)
    let newText = text.toLowerCase();
    settext(newText)
    props.showAlert("converted to lowercase","sucess") ; 
    
  }
  const handleclearClick =()=>{
    console.log("uppercase was clicked" + text)
    let newText = "";
    settext(newText);
  }
  const HandleOnChange=(event)=>{
    console.log("uppercase was clicked")
    settext(event.target.value);
  }
  const [text,settext]=useState('');
  //settext("new text");

  return (
    <>
    <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#062543'}}>
         <h1 className='mb-4'>{props.heading}</h1>
           <div className="mb-3">
           <label htmlFor="mybox" className="form-label">Example textarea</label>
           <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#153d5e' : 'white',color:props.mode === 'dark' ? 'white' : '#062543'}} id='mybox' rows="3"></textarea>
           <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert into uppercase</button>
           <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert into lowercase</button>
           <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>clear text</button>
           </div>
  
           </div>
           <div className="conatiner  my-3" style = {{color : props.mode === 'dark' ? 'white' : '#062543'}}>
             <h1>your text summery</h1>
             <p>{text.split(" ").filter(( element)=>{return element.length!==0 }).length} words and {text.length} characters </p>
             <h3>preview</h3>
             <p> {text.length >0?text:"Nothing to Preview"} </p>
           
           </div>
    </>
  )
}
