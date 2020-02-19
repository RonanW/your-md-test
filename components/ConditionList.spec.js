import React from 'react'
import ConditionList from './ConditionList'
import { mount } from 'enzyme'

function renderConditionList (args) {
  const defaultProps = {
    conditions: []
  }

  const props = { ...defaultProps, ...args }
  return mount(<ConditionList {...props} />)
}

it('renders ConditionList component', () => {
  const wrapper = renderConditionList()
  expect(wrapper.find('ConditionList').length).toBe(1)
})

it('throws a type error if incorrect prop type passed', () => {
  expect.assertions(2)
  try {
    const wrapper = renderConditionList({ conditions: 25 })
  } catch (error) {
    expect(error).toBeInstanceOf(TypeError)
    expect(error).toHaveProperty('message', 'conditions.map is not a function')
  }
})
