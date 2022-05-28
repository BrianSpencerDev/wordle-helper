import {useRef} from "react";

function Input(props){

    const inputRef = useRef()

    function submitHandler(e) {
        e.preventDefault();

        const enteredInput = inputRef.current.value;

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

    return <div className="flex justify-center mb-5">
        <form onSubmit={submitHandler}>
            <input className="border-2 border-solid border-black" name="letters" type="text" size="10" ref={inputRef}></input>
            <button>Submit</button>
        </form>
    </div>

}

export default Input;