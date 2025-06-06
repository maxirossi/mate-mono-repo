import { ValueObject } from '../ValueObject';
import { ValueObjectException } from '../../exceptions/ValueObjectException';

export class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsNotEmpty(value);
  }

  private ensureIsNotEmpty(name: string): void {
    if (name.trim().length === 0) {
      throw new ValueObjectException('Name cannot be empty');
    }
    if (name.trim().length < 3) {
      throw new ValueObjectException('Name must have more of 3 characteres');
    }
  }
}
