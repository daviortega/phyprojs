'use strict'

let expect = require('chai').expect,
	HelloWorld = require('./HelloWorld.js')

describe('My first test suite', () => {
	it('My first test', () => {
		let hello = new HelloWorld(),
			tellMe = hello.to('Davi')
		expect('Hello, Davi').equal(tellMe)
	})
	it('Testing orNot', function() {
		let hello = new HelloWorld(),
			tellMe = hello.orNot('Davi')
		expect(tellMe).equal('Not Hello, for Davi')
	})
})
