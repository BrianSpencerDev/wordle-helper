import Word from "./Word"

function Results(props){

    const words = props.words;

    return <div className="lg:w-8/12  flex flex-row flex-wrap justify-evenly mx-auto">
        {words.map( (word, index) => (
            <Word 
                key={index}
                word={word}
            />)
        )}
    </div>
}

export default Results;