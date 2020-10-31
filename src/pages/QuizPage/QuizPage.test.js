import React from 'react';
import {shallow} from 'enzyme';

import QuizPage from './QuizPage';



describe('Testing Homepage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<QuizPage/>);
    }, 10000)
    test('should render a header for result', () => {
        const text = "Result"
        const header = wrapper.find(".result__header").text();
        expect(header).toEqual(text);
    }) 

    test('should render a header for game', () => {
        const text = "Trivia"
        const header = wrapper.find(".game__header").text();
        expect(header).toEqual(text);
    })      

    test('should have a prop of score', () => {
        const score = wrapper.find("#score").text();
        expect(score).toBe("0");
    })    
})