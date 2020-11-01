import dataJson from './Apprentice_TandemFor400_Data.json';

let sortedData= [];
dataJson.forEach((item, idx) => {
  sortedData = [...sortedData, {id: idx + 1, question: item.question, options: [...item.incorrect, item.correct].sort(), correct: item.correct, pass: false}];
});

export const shuffle = () => {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array.slice(0,10);
  }

export const sortData = (arr) => {
  let finalArr = [];
  arr.forEach((item) => finalArr.push(sortedData[+item]));
  return finalArr;
}


