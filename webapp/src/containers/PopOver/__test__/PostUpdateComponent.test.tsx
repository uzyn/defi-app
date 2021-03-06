import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../app/rootStore';
import PostUpdateComponent from '../UpdateProgress/PostUpdateComponent';

describe('PostUpdateComponent', () => {
  it('should check for snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <PostUpdateComponent closeModal={() => {}} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
