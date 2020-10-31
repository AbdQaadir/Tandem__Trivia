import React from 'react';
import {shallow} from 'enzyme';

import Homepage from './Homepage';

describe('Testing Homepage', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Homepage/>);
    })
    test('header should have a text of Welcome Aboard', () => {
        const header = wrapper.find("#homepage__header").text()
        expect(header).toBe("Welcome Aboard!");
    })
    test('button should have the text of Get Started and property of to', () => {
        const button = wrapper.find(".homepage__btn").text()
        expect(button).toBe("Get Started");
    })
    
})
