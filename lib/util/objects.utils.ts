export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0
}

export const isAttributeInObject = (attr: string, obj: object) => {
  return attr in obj ?? obj[attr as keyof typeof obj]
}
