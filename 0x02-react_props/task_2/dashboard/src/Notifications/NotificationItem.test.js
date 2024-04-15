import React from 'react'
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('<NotificationItem />', () => {
    it('rendering of the component works without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('by passing dummy type and value props, it renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test"/>);  
        expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
        expect(wrapper.find('li').text()).toBe("test");
    })
    it('by passing a dummy html prop, it renders the correct htm', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
    })
})