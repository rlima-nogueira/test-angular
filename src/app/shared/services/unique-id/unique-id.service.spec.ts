import { UniqueIdService } from "./unique-id.service";

//nome da classe.name pra quando a classe mudar de nome, o teste acompanhar.
describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });


  /**
   * Gerando vários ids seguidos
   * o 'new Set()' impede que um id seja gerado igual
   * entao se o size for menor que 50 o teste vai falhar
   */
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate id when called multiple time`, () => {
    const service = new UniqueIdService();
    const ids = new Set();

    for (let i = 0 ; i < 50 ; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

});

//Estrutura de testes jasmine
// alguma coisa deve fazer algo quando tal
// -> blablabla should blablabla when blablabla
