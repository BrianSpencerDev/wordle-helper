import {useRef, useState} from "react";
import Letter from "./Letter";

function Input(props){


    const [inputs, setInputs] = useState([{letter:'?', color: 'gray'}, {letter:'?', color: 'gray'},
        {letter:'?', color: 'gray'}, {letter:'?', color: 'gray'}, {letter:'?', color: 'gray'}])

    const [currInput, setCurrInput] = useState(0)

    function submitHandler(e) {
        // e.preventDefault();

        const enteredInput = "";

        for (const input of inputs) {
            if (input.color === 'yellow'){
                enteredInput += input.letter.toLowerCase();
            }
            else {
                enteredInput += input.letter;
            }
            
        }

        //if no 'then' words.map in index.js will fail as words will be a promise before an array
        callAPI(enteredInput)
            .then(data => {props.onSubmit(data)});
    }
    

    const callAPI = async (letters) => {
		try {
			const res = await fetch(
				`http://wordleapi.brian-spencer.com/?letters=${letters}`,
			);
            
			const data = await res.json();

            return data.words;
		} catch (err) {
			console.log(err);
		}
	};

    function onDelete(){
        

        const newArray = [...inputs];

        newArray[currInput].letter = '?';
        newArray[currInput].color = 'gray'

        setInputs(newArray);

        if (currInput > 0){ 
            setCurrInput(currInput - 1); 
        }
        
    }

    function handleKeyboard(event){

        if (event.key === "Enter") {
            submitHandler();
        } else if (event.key === "Backspace") {
            onDelete();
        } else if (event.key === " " || event.key === '?'){
            setCurrInput(currInput++)
        } else {

            console.log('hey')

            const letter = event.key.toUpperCase()

            const newArray = [...inputs];

            newArray[currInput].letter = letter;
            newArray[currInput].color = 'yellow';

            setInputs(newArray);

            if (currInput < 4) {
                setCurrInput(currInput + 1);
            }
        }
    }  

    return <div tabIndex="0" className="flex flex-row justify-center my-5" onKeyDown={handleKeyboard}>
        <Letter pos={0} inputs={inputs} setInputs={setInputs}/>
        <Letter pos={1} inputs={inputs} setInputs={setInputs}/>
        <Letter pos={2} inputs={inputs} setInputs={setInputs}/>
        <Letter pos={3} inputs={inputs} setInputs={setInputs}/>
        <Letter pos={4} inputs={inputs} setInputs={setInputs}/>
    </div>

}

export default Input;