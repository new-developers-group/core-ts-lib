import { MultipleValidations } from './validation.error'

/**
 * validate all attributes at once and return multiple errors
 */
export interface MultipleValidator {
  toMultipleValidate(input: unknown): Map<string, MultipleValidations>
}
