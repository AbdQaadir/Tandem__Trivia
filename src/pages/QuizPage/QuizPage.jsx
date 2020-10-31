import Question from '../../components/Question/Question';
import {Link} from 'react-router-dom';
import './QuizPage.css';

const QuizPage = ({data, index, handleNext, score, completed, resetGame}) => {
    const currentQuestion = data && data[index];
    return (
        <div className="container-fluid" id="quizpage">
            <div className="row h-100 justify-content-center align-items-center">
                <div className={`col-10 col-md-8 ${completed && "d-none"}`} id="quiz__area">
                    <h2 className="game__header">Trivia</h2>
                    <Question index={index} item={currentQuestion} handleNext={handleNext} />
                </div>
                <div className={`col-10 col-md-6 py-5 text-center ${!completed && "d-none"}`} id="result__area">
                    <h2 className="result__header">Result</h2>
                    <h1 className="mt-4"><span className={score > 5 ? "text-success" : "text-danger"} id="score">{score || 0}</span> / {data?.length}</h1>
                    <Link to="/" className=" mt-5 py-3 px-5 btn btn-secondary" onClick={() => resetGame()}>Start Again</Link>
                </div>
            </div>
        </div>
    )
}

export default QuizPage
