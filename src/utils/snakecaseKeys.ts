import _ from "lodash";

export const snakecaseKeys = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => _.snakecaseKeys(item))
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc: any, key) => {
      const camelKey = snakeCase(key)
      acc[camelKey] = snakecaseKeys(obj[key])
      return acc
    }, {})
  }
  return obj
}
