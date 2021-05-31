import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  //valida se o primeiro caracter do id gerado é uma string
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

public generateUniqueIdWithPrefix(prefix: string): string {
  //lança a excessao se for null/undefined OU se o regex falhar
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }

}
