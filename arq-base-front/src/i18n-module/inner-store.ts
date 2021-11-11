const store = {}

const put = (key, value): any => {
  store[key] = value
  return value
}

const get = (key): any => store[key]

export { get, put }
