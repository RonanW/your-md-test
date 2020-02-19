import React from 'react'
import Condition from './Condition'
import { mount } from 'enzyme'

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

function renderCondition (args) {
  const defaultProps = {
    label: 'Condition Label',
    snippet: loremIpsum,
    image: 'https://via.placeholder.com/50'
  }

  const props = { ...defaultProps, ...args }
  return mount(<Condition {...props} />)
}

it('renders Condition component', () => {
  const wrapper = renderCondition()
  // console.log(wrapper.debug())
  expect(wrapper.find('Condition').length).toBe(1)
})

it('should apply correct image src', () => {
  const wrapper = renderCondition()
  expect(wrapper.find('.MuiCardMedia-img').prop('src')).toEqual(
    'https://via.placeholder.com/50'
  )
})

it('should apply default image src if none supplied', () => {
  const wrapper = renderCondition({ image: undefined })
  expect(wrapper.find('.MuiCardMedia-img').prop('src')).toEqual(
    'https://via.placeholder.com/310'
  )
})

it('should have snippet in collapsed state', () => {
  const wrapper = renderCondition()
  expect(wrapper.find('[data-truncated="collapsed"]').length).toBe(1)
})
