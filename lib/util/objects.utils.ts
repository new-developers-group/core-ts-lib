import jp from 'jsonpath'

export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0
}

export const isAttributeInObject = (attr: string, obj: object) => {
  return attr in obj ?? obj[attr as keyof typeof obj]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const searchInJson = (obj, key): any => {
  if (obj && typeof obj === 'object') {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return jp.value(obj, `$.${key}`)
  }
  return undefined
}
