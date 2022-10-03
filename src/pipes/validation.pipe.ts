import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) return value;

    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length) {
      const messages = errors.map(
        (err) =>
          `${err.property} - ${Object.values(err.constraints).join(', ')}`,
      );

      throw new ValidationException(messages);
    }

    return value;
  }

  private toValidate(metatype) {
    const types = [String, Boolean, Number, Array, Object];

    return !types.includes(metatype);
  }
}
