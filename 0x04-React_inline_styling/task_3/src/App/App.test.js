import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('App contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });
  it('App contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });
  it('App contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });
  it('App contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});