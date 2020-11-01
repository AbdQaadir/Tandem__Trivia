import {useEffect, useState} from 'react';
import {sortData, shuffle} from './utils';
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

  const init = () => {
    const arr = shuffle()
    setData([]);
    setScore(0);
    setCompleted(false);
    setActive(0);
    setData(sortData(arr));
  }
    
  useEffect(() => {
    // Call the init function on component mounts
    init();
    // eslint-disable-next-line
  }, []);


  return (
      <Router>
        <Switch>
            <Route exact path="/" render={(props) => <Homepage {...props} init={init} />} />
            <Route  path="/quiz" render={(props) => <QuizPage {...props} score={score} index={active} data={data} handleNext={handleNext} completed={completed} />}/>
        </Switch>
     </Router>  
  );
}

export default App;
