const defaultEnvironment = 'DEV'

const getEnvironment = (): string => process.env.ENV === undefined
  ? defaultEnvironment
  : process.env.ENV

export { getEnvironment }
