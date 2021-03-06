
import { useState } from 'react';
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
const Question = ({item, index, handleNext }) => {
    const [active, setActive] = useState(true);
    const [right, setRight] = useState("");
    const [wrong, setWrong] = useState("");
    const {question, options, correct} = item;
    let timer = null;
    const setTimer = (option) => {
        timer = setTimeout(() => { handleNext(item.id, item.correct === option);  setActive(true)}, 1000);
    }
    const clearTimer = () => {
        clearTimeout(timer);
    }
    const markQuestion = (option, correct) => {
        if(active){
            setActive(false);
            clearTimer(timer);
            if(option === correct){
                setRight(option);
                setWrong(option);
            }else{
                setWrong(option);
                setRight(correct);
            }
            setTimer(option);   
        }   
    }
    return (
       <div id="question">
            <h4 id="question__text">{index + 1}) {question}</h4>
            <ul className="list-unstyled">
                {options?.map((option, idx) => <li key={idx} onClick={() => markQuestion(option, correct)} className={option === right ? "right" : option === wrong ? "wrong" : option !== wrong && option !== right && !active ? "disabled" : ""}><span className="option__tag">{getLetter(idx)}</span> {option}</li>)}
            </ul>
       </div>
    )
}

export default Question
