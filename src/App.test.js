import React from "react";
import { shallow } from "enzyme";
import data from './Apprentice_TandemFor400_Data.json';
import App from "./App";


it("renders without crashing", () => {
    shallow(<App />);
});
  
test("the questions data is correct", () => {
    expect(data).toMatchSnapshot();
    expect(data).toHaveLength(21)
    expect(data.map(item => item.question)).toEqual([
        "What was Tandem previous name?",
        "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        "A group of tigers are referred to as:",
        "What is the top speed an average cat can travel?",
        "A cat can jump to _____ times its own height:",
        "What is the only letter that doesn't appear in a US state name?",
        "What is the name for a cow-bison hybrid?",
        "What is the largest freshwater lake in the world?",
        "In a website address bar, what does WWW stand for?",
        "In a game of bingo, what number is represented by the name two little ducks?",
        "According to Greek mythology, who was the first woman on Earth?",
        "In which European city would you find Orly airport?",
        "Where would you find the Sea of Tranquility?",
        "Which artist painted 'Girl with a Pearl Earrin'?",
        "What is the official name for the 'hashtag' symbol?",
        "Not American at all, where is apple pie from?",
        "What is the national animal of Scotland?",
        "Where in the world is the only place where Canada is *due south*",
        "Approximately how many grapes go into a bottle of wine?",
        "How much does a US One Dollar Bill cost to make?",
        "The Vatican bank has the only ATM in the world that allows users to do what?",
    ])
});


for (let i = 0; i < data.length; i++) {
    test(`data[${i}] should have properties (question, incorrect, correct)`, () => {
        expect(data[i]).toHaveProperty("question");
        expect(data[i]).toHaveProperty("incorrect");
        expect(data[i]).toHaveProperty("correct");
    });
}




