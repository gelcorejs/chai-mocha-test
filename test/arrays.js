var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        expect(array).to.eql([1,2,4,6,8]);
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql([1, 2, 4, 6, 8]);
        expect(array).to.deep.equal([1, 2, 4, 6, 8]);
    });

    it('Contiene el valor "2" el array', () => {
        expect(String(array).indexOf('2,')>-1).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
        expect([1,2]).to.include(2).not.to.include(23);
    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        
    });
    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([4,2,1,6,8]);
    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect(array).to.have.lengthOf(5);
    });
});
