import { FieldValidation } from '@/data/protocols/validation'

export abstract class ValidationHelper implements FieldValidation {
  constructor(readonly field: string) {}

  get error(): Error | Error[] {
    throw new Error('Method not implemented.')
  }

  protected getNestedAttributeValue = (input: unknown, otherField?: string) => {
    return this.search(input, otherField ? otherField : this.field)
  }

  search(obj, key): any {
    let list = []
    if (!obj) return list
    if (obj instanceof Array) {
      for (const i in obj) {
        list = list.concat(this.search(obj[i], key))
      }
      return list
    }
    if (obj[key]) list.push(obj[key])

    if (typeof obj == 'object' && obj !== null) {
      const children = Object.keys(obj)
      if (children.length > 0) {
        for (let i = 0; i < children.length; i++) {
          list = list.concat(this.search(obj[children[i]], key))
        }
      }
    }
    return list.length > 0 ? list[0] : undefined
  }
}
