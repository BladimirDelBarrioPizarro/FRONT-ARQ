import { logStore } from '../log-store'

describe('log-store', () => {
  test('Inserta logs, los obtiene y borra el store', () => {
    const store = logStore()
    expect(store.getLogs().length).toBe(0)
    store.insertLog('un log')
    store.insertLog('otro log')
    expect(store.getLogs().length).toBe(2)
    store.clearLogs()
    expect(store.getLogs().length).toBe(0)
  })
})
