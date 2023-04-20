import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked", text);
        let newText = text.toUpperCase();
        //setText("You have clicked on 'Convert to UpperCase'");
        props.showAlert("Converted to Upper Case", "success");
        setText(newText);
    }   

    const handleLowClick = () =>{
        //console.log("Uppercase was clicked", text);
        let newText = text.toLowerCase();
        //setText("You have clicked on 'Convert to UpperCase'");
        props.showAlert("Converted to Lower Case", "success");
        setText(newText);
    }

    const handleListenClick = () =>{
        props.showAlert("Listening to text now", "success");
        let msg = new SpeechSynthesisUtterance();
        setText(text);
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //text = "Enter new text"; ---> Wrong way to change the state
    //setText("Enter new text"); //---> Right way to change the state
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white': 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className = "form-control" value={text} onChange= {handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey': 'white', color:props.mode === 'dark'?'white': 'black'}} placeholder= "Enter text here" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleListenClick}>Listen to text</button>
        </div>

        <div className='container my-3' style={{color:props.mode === 'dark'?'white': 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{(0.008 * text.split(" ").length).toFixed(3)} minutes read </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Previewed text here'}</p>
        </div>
        </>
    )
}
