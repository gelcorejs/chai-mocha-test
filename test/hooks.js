
describe.only('Hooks', () => {
  before(()=> console.log('Se ejecuta al inicio una vez'));
  after(()=> console.log('Se ejecuta al final de todas las pruebas una vez'));
  beforeEach(()=> console.log('Se ejecuta antes de todas las pruebas una vez x cada una'));
  afterEach(()=> console.log('Se ejecuta despues de todas las pruebas una vez x cada una'));
  it('prueba 1', () => console.log('Test Prueba 1'));
  it('prueba 2', () => console.log('Test Prueba 2'));
});