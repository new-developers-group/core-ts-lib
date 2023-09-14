export interface FieldValidation {
  get field(): string
  get error(): Error | Error[]
}
