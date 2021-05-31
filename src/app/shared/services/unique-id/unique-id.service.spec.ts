import { UniqueIdService } from "./unique-id.service";

//nome da classe.name pra quando a classe mudar de nome, o teste acompanhar.

describe(UniqueIdService.name, () => {

  /**
   * Antes de cada teste, execute esse bloco de codigos abaixo
   * ou seja, instacia um unique service antes de cada IT
   */
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });


  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();

    //Espera um tipo literal
    expect(true).toBeTrue();
    //literal tb. true pra true. false pra false.
    expect(true).toBe(true);
    //se quiser testar se o objeto ta vindo null, undefined e etc
    expect(true).toBeTruthy();
  });


  /**
   * Gerando vários ids seguidos
   * o 'new Set()' impede que um id seja gerado igual
   * entao se o size for menor que 50 o teste vai falhar
   */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should not generate id when called multiple time`, () => {
    const ids = new Set();

    for (let i = 0 ; i < 50 ; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
        should return the number of generatedIds when called `, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });


  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should throw when called with empty `, () => {

    /**
     * Quando chamamos um metódo, querendo testar se ele lança uma exceção ou não,
     * é necessário colocar dentro de um função
     */

    const emptyValues = [null, undefined, '', '0', '1'];

    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });

});

//Estrutura de testes jasmine
// alguma coisa deve fazer algo quando tal
// -> blablabla should blablabla when blablabla
