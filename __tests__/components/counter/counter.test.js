import React from 'react';
import Counter from '../../../src/components/counter/counter.js';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter Module', () => {
  it('is rendered on page load', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('transfers state to the DOM when incremented', () => {
    let app = mount(<Counter />);
    let incrementer = app.find('.up');
    incrementer.simulate('click');
    expect(app.find('span').text()).toBe('1');
  });

  it('changes state properly when incremented', () => {
    let app = mount(<Counter />);
    let incrementer = app.find('.up');
    incrementer.simulate('click');
    expect(app.state('count')).toBe(1);
  });

  it('transfers state to the DOM when decremented', () => {
    let app = mount(<Counter />);
    let decrementer = app.find('.down');
    decrementer.simulate('click');
    expect(app.find('span').text()).toBe('-1');
  });

  it('changes state properly when decremented', () => {
    let app = mount(<Counter />);
    let decrementer = app.find('.down');
    decrementer.simulate('click');
    expect(app.state('count')).toBe(-1);
  });
});
