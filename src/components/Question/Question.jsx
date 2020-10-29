
import './Question.css'

const getLetter = str => {
    switch(str){
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";
        default:
            return null;
        
    }
}
const Question = ({item, index, handleChoose}) => {
    const {question, options, correct} = item;
    return (
       <div id="question">
            <h4>{index + 1}) {question}</h4>
            <ul className="list-unstyled">
                {options?.map((option, idx) => <li key={idx} onClick={() => handleChoose({option, correct})}><span className="option__tag">{getLetter(idx)}</span> {option}</li>)}
            </ul>
       </div>
    )
}

export default Question
