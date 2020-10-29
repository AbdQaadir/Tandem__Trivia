import {useEffect, useState} from 'react';
import dataJson from './Apprentice_TandemFor400_Data.json';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


import Homepage from './pages/Homepage/Homepage'
import QuizPage from './pages/QuizPage/QuizPage'; 

function App() {
  const [score, setScore]= useState(0);
  const [active, setActive] = useState(0);
  const [final, setFinal] = useState([]);
  let data = [];

  const shuffle = (array) => {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  const indexArray = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]).slice(0,10);
    dataJson.forEach((item, idx) => {
      data = [...data, {id: idx + 1, question: item.question, options: [...item.incorrect, item.correct].sort(), correct: item.correct, pass: false}];
    });
    data = [...data].filter((item) => indexArray.includes(item.id));
    

    
    const handleNext = (id, condition) => {
      if(active < 9){
          setActive((prevProps) => prevProps + 1);
      }else{
        console.log(final);
      }
    }
    useEffect(() => {
      setFinal(data);
    }, [])
  return (
      <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/quiz" render={(props) => <QuizPage {...props} index={active} data={data} handleNext={handleNext} />}/>
        </Switch>
     </Router>
    
  
  );
}

export default App;
