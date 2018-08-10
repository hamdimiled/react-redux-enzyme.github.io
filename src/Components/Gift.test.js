import React from 'react'
import {
    shallow
} from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const gift = shallow( < Gift / > );
    it('renders correctly', () => {
        expect(gift).toMatchSnapshot();
    }); 
    it('initializes a preson and present in `state`', () => {
        expect(gift.state()).toEqual({person:'' , present:''});
    });
    describe('when typing into a person input' , ()=>{
        it('updates the person in `state`' , ()=>{
            const person = 'Uncle';
            gift.find('.input-person').simulate('change' , {target:{value:person}})
            expect(gift.state().person).toEqual(person);
        })
    });
    describe('when typing into a present input' , ()=>{
        it('updates the present in `state`' , ()=>{
            const present = ' GMC';
            gift.find('.input-present').simulate('change' , {target:{value:present}})
            expect(gift.state().present).toEqual(present);
        })
    });
})