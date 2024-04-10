import React from 'react'
import NotificationItem from './NotificationItem';


describe('NotificationItem', () => {
    it('rendering of the component works without crashing', () => {
        const wrapper = shallow(<NotificationItem />)
        except(wrapper.exists()).toBe(true)
    });
    it('by passing dummy type and value props, it renders the correct html', () => {
        
    })
})