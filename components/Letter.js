import { createRouter } from "next/router";

function Letter(props){

    //console.log(props.inputs[props.pos])

    const input = props.inputs[props.pos]
    const color = input.color;

    function handleClick(){
        console.log("dafuq")

        if(input.color === 'yellow'){
            const newArray = [...props.inputs];

            newArray[props.pos].color = 'green';

            props.setInputs(newArray);
        }
        else if(input.color === 'green'){
            const newArray = [...props.inputs];

            newArray[props.pos].color = 'yellow';

            props.setInputs(newArray);
        }

    }

    function isActive(){
        if(props.currInput === props.pos){
            return true
        }

        return false
    }

    

    return <div className={` ${isActive() ? "active" : ""} flex content-center justify-center pb-1 m-1.5 w-16 text-6xl h-full font-bold border border-gray ${color}`} onClick={handleClick}>
        {input.letter}
    </div>

}

export default Letter;