/* eslint-env jest */
import NotFound from '../NotFound'

describe('component: NotFound', () => {
  test('Obtiene el componente parseado correctamente', () => {
    const component = NotFound()
    expect(component).not.toBeNull()
  })
})
