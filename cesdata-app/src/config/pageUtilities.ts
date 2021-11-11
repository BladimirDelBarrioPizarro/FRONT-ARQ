const getSortedData = (data, prop, isAsc): any => {
  return data.sort((a, b) => {
    return (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1)
  })
}
export { getSortedData }

const formatPage = (page): any => {
  return parseInt(page) + 1 // +1 La tabla trabaja y inicializa en 0 y backend no trata el 0
}
export { formatPage }
