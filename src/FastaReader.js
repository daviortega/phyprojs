'use strict'

module.exports =
class FastaReqder {
	constructor() {
		this.headers = []
		this.sequences = []
	}

	fastareader(chars) {
		let toPush = ''
		for (let step1 = 0; step1 < chars.length; step1++) {
			if (chars.get(step1) === '>') {
				while (chars.get(step1 + 1) !== '\\') {
					toPush += chars.get(step1 + 1)
					step1++
				}
				this.headers.push(toPush)
			}
		}
		return 0
	}
}
