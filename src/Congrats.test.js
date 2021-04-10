import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import Congrats from './Congrats'

import { findByTestAttr } from '../test/utils'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Congrats component', () => {
  const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
  }

  it('should render without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
  })

  it('renders nothing when no `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
  })

  it('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(0)
  })
})
