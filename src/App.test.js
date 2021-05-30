import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/utils'
import App from './App'

const setup = () => {
  return shallow(<App />)
}

test('renders without errors', () => {
  const wrapper = setup()
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app).toHaveLength(1)
})
