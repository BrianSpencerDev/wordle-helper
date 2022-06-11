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

    

    return <div className={`m-1.5 w-7 text-xl h-full font-bold border border-gray ${color}`} onClick={handleClick}>
        {input.letter}
    </div>

}

export default Letter;