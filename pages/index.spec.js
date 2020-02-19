import React from 'react'
import { Provider } from 'react-redux'
import { Home } from './index'
import { initStore } from '../store'
import { mount } from 'enzyme'
import CircularProgress from '@material-ui/core/CircularProgress'

function renderHome (args) {
  const defaultProps = {
    conditions: [],
    loadConditions: jest.fn(
      () => new Promise(resolve => setTimeout(resolve, 0))
    )
  }

  const store = initStore()
  const props = { ...defaultProps, ...args }
  return mount(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  )
}

it('renders Home component', async () => {
  const wrapper = renderHome()
  expect(wrapper.find('Home').length).toBe(1)
})

it('renders shows progress component when loading', async () => {
  const wrapper = renderHome()
  expect(wrapper.find('.MuiCircularProgress-root').length).toBe(1)
})
