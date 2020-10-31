import {useEffect, useState} from 'react';
import sortedData from './utils';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/Homepage'
import QuizPage from './pages/QuizPage/QuizPage'; 

function App() {
  const [data, setData] = useState([]);
  const [score, setScore]= useState(0);
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(0)  

  const handleNext = (id, condition) => {
    condition && setScore((prevProps) => prevProps + 1);
    if(active < 9){
        setActive((prevProps) => prevProps + 1);
    }else{
      setCompleted(true)
    }
  }

  // Method to reset/restart the game
  const resetGame = () => {
    setData([]);
    setScore(0);
    setCompleted(false);
    setActive(0);
    init();
  }

  const init = () => {
    // Set the data with the sorted data from utils.js
    setData(sortedData);
  }
    
  useEffect(() => {
    // Call the init function on component mounts
    init();
    // eslint-disable-next-line
  }, []);


  return (
      <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/quiz" render={(props) => <QuizPage {...props} resetGame={resetGame} score={score} index={active} data={data} handleNext={handleNext} completed={completed} />}/>
        </Switch>
     </Router>  
  );
}

export default App;
