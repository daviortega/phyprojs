'use strict'

module.exports =

class HelloWord {
	constructor() {
		this.heyThere = 'Hello, '
	}
	to(person) {
		return this.heyThere + person
	}
	notTested(a) {
		return a
	}
}