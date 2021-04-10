import { shallow } from 'enzyme'
import App from './App'

test('renders app title', () => {
  const wrapper = shallow(<App />)
  const title = wrapper.find('h1')
  expect(title.text()).toBe('Jotto Game')
})
