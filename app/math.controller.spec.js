var should = require('chai').should()
require('./test.helpers')
var mathServce = require('./math.service')
require('./math.controller')

describe('Testing Math Controller', () => {

    var controller;

    beforeEach(ngModule('math.tools'))
    beforeEach(inject(($controller) => {
        controller = $controller('MathController', { mathServce: mathServce })
    }))
    //
    it('should add 5 + 5 correctly', () => {
        controller.add(5, 5).should.equal(10)
    })

    it('should correctly compute 5 to the power of 2', () => {
        controller.pow(5, 2).should.equal(25)
    })
})
