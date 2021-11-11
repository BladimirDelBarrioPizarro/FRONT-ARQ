// string
const get = (id): any => {
  return window.localStorage.getItem(id)
}

const put = (id, value): any => {
  window.localStorage.setItem(id, value)

  return value
}

const configure = (id = 'lang'): any => (
  {
    get: ((id) => () => get(id))(id),
    put: ((id) => (value) => put(id, value))(id)
  }
)

export {
  configure,
  get,
  put
}
