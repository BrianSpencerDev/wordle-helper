import {useRef} from "react";

function Input(){

    const inputRef = useRef()

    function submitHandler(e) {
        e.preventDefault();

        const enteredInput = inputRef.current.value;

        console.log(enteredInput);

        callAPI(enteredInput);
    }
    

    const callAPI = async (letters) => {
		try {
			const res = await fetch(
				`http://wordleapi.brian-spencer.com/?letters=${letters}`,
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

    return <div>
        <form onSubmit={submitHandler}>
            <input className="border-2 border-solid border-black" name="letters" type="text" size="10" ref={inputRef}></input>
            <button>Submit</button>
        </form>
    </div>

}

export default Input;