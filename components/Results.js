import Word from "./Word"

function Results(props){

    const words = props.words;

    return <div className="flex flex-row flex-wrap justify-center">
        {words.map( (word, index) => (
            <Word 
                key={index}
                word={word}
            />)
        )}
    </div>
}

export default Results;