/* eslint-disable no-unused-expressions */
'use strict'

let expect = require('chai').expect,
	HelloWorld = require('./HelloWorld.js')

describe('My first test suite', () => {
	it('Test if HelloWorld will say hello to Davi', () => {
		let hello = new HelloWorld(),
			tellMe = hello.to('Davi')
		expect(tellMe).equal('Hello, Davi')
	})
	it('Test if HelloWorld will say hello to Tony', () => {
		let hello = new HelloWorld(),
			tellMe = hello.to('Tony')
		expect(tellMe).equal('Hello, Tony')
	})
	it('Testing orNot', function() {
		let hello = new HelloWorld(),
			tellMe = hello.orNot('Davi')
		expect(tellMe).equal('Not Hello, for Davi')
	})
})

describe('It must have a constructor', function() {
	it('testing to see if there is a heyThere constructor', function() {
		let hello = new HelloWorld()
		expect(hello.heyThere).to.exist
	})
	it('.heyThere should be "Hello, "', function() {
		let hello = new HelloWorld()
		expect(hello.heyThere).equal('Hello, ')
	})
	it('this will never be done')
})
