import { CESCE_PRE_URL } from '../constants'

describe('mediator constants', () => {
  test('constants', () => {
    const mock = 'http://cesce-config-manager-pre.cesce.grupo.loc/config-manager/cesdata-front/pre'
    const wrapper = CESCE_PRE_URL
    expect(wrapper).toEqual(mock)
  })
})
