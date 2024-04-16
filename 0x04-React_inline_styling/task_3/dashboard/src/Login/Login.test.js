import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
    it('Login render without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Login render 2 inputs', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
    });
    it('Login render 2 labels', () => {
        const wrapper = shallow(<Login />);
        expect (wrapper.find('label')).toHaveLength(2);
    })
});