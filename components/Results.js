import Word from "./Word"

function Results(props){

    const words = props.words;

    return <div className="flex flex-wrap justify-center justify-content:space-betweeen max-w-5xl">
        {words.map( (word, index) => (
            <Word 
                key={index}
                word={word}
            />)
        )}
    </div>
}

export default Results;