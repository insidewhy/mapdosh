export const keyBy = (array, keyProp) => {
  const ret = new Map()
  array.forEach(val => {
    ret.set(val[keyProp], val)
  })
  return ret
}

export const mapValues = (map, valueMapper) => {
  const ret = new Map()
  map.forEach((val, key) => {
    ret.set(key, valueMapper(val))
  })
  return ret
}

export const mapToArrayByProp = (map, prop) => {
  const ret = []
  map.forEach((val, key) => {
    ret.push(val[prop])
  })
  return ret
}
