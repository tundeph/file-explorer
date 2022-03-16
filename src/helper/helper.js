const sortFunction = (a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

export const nameAscending = (a, b) => {
  a = a.name.toLowerCase()
  b = b.name.toLowerCase()
  return sortFunction(a, b)
}

export const nameDescending = (a, b) => {
  a = a.name.toLowerCase()
  b = b.name.toLowerCase()
  return sortFunction(b, a)
}

export const dateAscending = (a, b) => {
  a.added ? (a = new Date(a.added)) : (a = new Date())
  b.added ? (b = new Date(b.added)) : (b = new Date())
  return sortFunction(a, b)
}

export const dateDescending = (a, b) => {
  a.added ? (a = new Date(a.added)) : (a = new Date())
  b.added ? (b = new Date(b.added)) : (b = new Date())
  return sortFunction(b, a)
}

export const flattenArray = (arr) => {
  return arr.reduce((acc, item) => {
    if (item.files) {
      acc.push(...flattenArray(item.files))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
}
