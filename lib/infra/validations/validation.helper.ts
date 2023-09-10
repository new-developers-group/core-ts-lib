import { FieldNameValidation } from '@/data/protocols/validation';
import { isTruthy } from '@/util';

export abstract class ValidationHelper implements FieldNameValidation {
  constructor(readonly fieldName: string) {}

  protected getNestedAttributeValue = (input: unknown, index = 0) => {
    if (this.fieldName.includes('.')) {
      const root = this.fieldName.split('.')[index];
      if (!isTruthy(root)) {
        throw new Error('json node is invalid');
      }
      if (this.fieldName.split('.').length === index) {
        return input;
      }
      return this.getNestedAttributeValue(input[root], ++index);
    }
    return input[this.fieldName];
  };
}
