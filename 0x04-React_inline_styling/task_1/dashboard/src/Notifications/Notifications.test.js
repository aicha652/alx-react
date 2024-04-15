import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


decribe('<Notifications />', () => {
    it('rendering of the component works without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Notification render ul', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul')).toBeDefined();
    });
    it(' check that the component renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('verify that the first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem').first().prop('type')).toBe('default');
        expect(wrapper.find('NotificationItem').first().prop('value')).toBe('New course available');
    });
})