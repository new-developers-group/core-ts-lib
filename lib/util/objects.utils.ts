import jp from 'jsonpath'

export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0
}

export const isAttributeInObject = (attr: string, obj: object) => {
  return attr in obj ?? obj[attr as keyof typeof obj]
}

export const searchInJson = (obj, key): any => {
  if (obj && typeof obj === 'object') {
    return jp.value(obj, `$.${key}`)
  }
  return undefined
}
