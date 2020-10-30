import Question from '../../components/Question/Question';
import './QuizPage.css';
const QuizPage = ({data, index, handleNext, score, completed}) => {
    const currentQuestion = data[index];
    return (
        <div className="container-fluid" id="quizpage">
            <div className="row h-100 justify-content-center align-items-center">
                <div className={`col-10 col-md-8 ${completed && "d-none"}`} id="quiz__area">
                    <h2>Trivia</h2>
                    <Question index={index} item={currentQuestion} handleNext={handleNext} />
                    <div className="text-right w-100">
                    {`${index +1} of ${data.length}`}
                        {index < 9 && <button className="btn btn-success mr-3 px-4 py-2 ml-4" onClick={()=> handleNext("next")}>Next</button>}
                        {index > 8 &&  <button className="btn btn-success mr-3 px-4 py-2 ml-4" onClick={()=> handleNext("next")}>Submit</button>}
                    </div>
                </div>
                <div className={`col-10 col-md-8 ${!completed && "d-none"}`} id="result__area">
                    <h2>Result</h2>
                    <p>Congrats, you scored:</p>
                    <h1>{score} / {data.length}</h1>
                </div>
            </div>
        </div>
    )
}

export default QuizPage
