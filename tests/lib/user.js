var expect = require('chai').expect
const jwt = require('../../libraries/jwt')
const Strings = require('../../libraries/string')

const config = require('../../env').jwt
const jwt2 = require('jsonwebtoken');


describe('Libraries', function() {
    describe('jwt test', function() {
        it('encode string should be not same raw', () => {
            const encode = jwt.encode({id : 1})
            expect(encode).to.be.not.equal("{id : 1}")
        })

        it('decode string should be same raw', () => {
            const encode = jwt.encode({id : 1})
            const decoded = jwt2.verify(encode, config.secret);

            expect(decoded.id).to.be.equal(1)
        });
    })

    describe('string test', function() {
        it("hashed string should be not same raw", () => {
            const password = "pass"
            const hashedPassword = Strings.generatePasswordHash(password)

            expect(hashedPassword).to.be.not.equal(password)
        })

        it("checkPassword should be true with hashed string", () => {
            const password = "pass"
            const hashedPassword = Strings.generatePasswordHash(password)

            const isTrue = Strings.checkPassword(password, hashedPassword)

            expect(isTrue).to.be.equal(true)
        })
    })
})