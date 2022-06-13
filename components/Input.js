import {useRef, useState, useEffect, useCallback} from "react";
import Letter from "./Letter";

function Input(props){


    const [inputs, setInputs] = useState([{letter:'?', color: 'gray'}, {letter:'?', color: 'gray'},
        {letter:'?', color: 'gray'}, {letter:'?', color: 'gray'}, {letter:'?', color: 'gray'}])

    const [currInput, setCurrInput] = useState(0)

    const submitHandler = useCallback( 
        () => {

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
        },
        [props, inputs]
    )
    

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

    const onDelete = useCallback(
        () => {
        

            const newArray = [...inputs];
    
            newArray[currInput].letter = '?';
            newArray[currInput].color = 'gray'
    
            setInputs(newArray);
    
            if (currInput > 0){ 
                setCurrInput(currInput - 1); 
            }
            
        },
        [currInput, inputs]
    )

    const handleKeyboard = useCallback(
        (event) => {
            if (event.key === "Enter") {
                submitHandler();
            } else if (event.key === "Backspace") {
                onDelete();
            } else if (event.key === " " || event.key === '?'){
                if (currInput < 4) {
                    setCurrInput(currInput + 1);
                }
            } else if (event.key.length === 1) {
                
    
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
        },
        [currInput, inputs, submitHandler, onDelete]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
    
        return () => {
          document.removeEventListener("keydown", handleKeyboard);
        };
      }, [handleKeyboard]);

    

    return <div id="input" className="flex flex-row justify-center my-5" >
        <Letter pos={0} inputs={inputs} setInputs={setInputs} currInput={currInput}/>
        <Letter pos={1} inputs={inputs} setInputs={setInputs} currInput={currInput}/>
        <Letter pos={2} inputs={inputs} setInputs={setInputs} currInput={currInput}/>
        <Letter pos={3} inputs={inputs} setInputs={setInputs} currInput={currInput}/>
        <Letter pos={4} inputs={inputs} setInputs={setInputs} currInput={currInput}/>
    </div>

}

export default Input;