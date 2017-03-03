'use strict'

module.exports =
class FastaReqder {
	constructor() {
		this.headers = ''
		this.sequences = ''
	}

	fastareader(chars) {
		for (let step1 = 0; step1 < chars.size(); step1++) {
			if (chars.get(step1) === '>')
				return 0
		}
		return 0
	}
}
