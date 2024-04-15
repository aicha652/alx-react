import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

StyleSheetTestUtils.suppressStyleInjection

describe('<Header />', () => {
    it('Header render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Header render img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHavelength(1);
    });

    it('Header render h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toHavelength(1);
    });
})