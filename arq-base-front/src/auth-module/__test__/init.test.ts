import auth from '../index'

describe('index: initAuth', () => {
  test('initAuth', async () => {
    const wrapper = await auth()
    const token = localStorage.getItem('token')
    expect(wrapper).toEqual(token)
    expect(wrapper).toBeDefined()
  })
})
