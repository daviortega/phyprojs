'use strict'

module.exports =
class HelloWorld {
	constructor() {
		this.heyThere = 'Hello, '
	}
	to(person) {
		return this.heyThere + person
	}
	orNot(person) {
		return 'Not ' + this.heyThere + 'for ' + person
	}
}
