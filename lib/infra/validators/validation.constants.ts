import { ValidationOptions } from '@/data/protocols/validation'

export const DEFAULT_ERROR_MSG = 'does not exist within provided list'
export const CUSTOM_PROFESSIONAL_ERR_MSG = `is not an active professional. Please select one from the dropdown list.`
export const CUSTOM_PROFESSIONAL_DUP_ERR_MSG = `Duplicate name found. Please verify against dropdown list.`

export const DEFAULT: ValidationOptions = {
  strictEquals: false,
  customMessage: null
}

export const DEFAULT_ISWITHIN: ValidationOptions = {
  strictEquals: false,
  customMessage: DEFAULT_ERROR_MSG
}

export const DEFAULT_REQUIRED: ValidationOptions = {
  strictEquals: false,
  customMessage: 'is required field'
}
