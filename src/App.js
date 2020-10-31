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

    const resetGame = () => {
      setData([]);
      setScore(0);
      setCompleted(false);
      setActive(0);
      init();
    }
    const init = () => {
      // let allData= []
      // dataJson.forEach((item, idx) => {
      //   allData = [...allData, {id: idx + 1, question: item.question, options: [...item.incorrect, item.correct].sort(), correct: item.correct, pass: false}];
      // });
      // allData = [...allData].filter((item) => indexArray.includes(item.id));
      setData(sortedData);
    }
    useEffect(() => {

      init();
      // eslint-disable-next-line
    }, []);

    console.log(data);  
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
