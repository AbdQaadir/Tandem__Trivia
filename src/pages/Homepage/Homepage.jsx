import {Link} from 'react-router-dom';
import './Homepage.css'

const Homepage = ({init}) => {
    return (
        <div className="container-fluid" id="homepage">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-10 col-lg-4 col-md-6  text-center">
                    <h1 className="my-4" id="homepage__header">Welcome Aboard!</h1>
                    <h5>Instructions:</h5>
                    <ul className="list-unstyled homepage__instruction">
                        <li>The total number of questions is 10</li>
                        <li>You have from 3 to 4 options to pick an answer from</li>
                        <li>You can only choose one option</li>
                        <li>The game will move to the next question automatically 500ms after you chosen an option</li>
                    </ul>
                    <Link to="quiz" className="btn homepage__btn" onClick={() => init()}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage
