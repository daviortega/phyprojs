'use strict'

module.exports =
class FastaReqder {
	constructor() {
		this.headers = []
		this.sequences = []
	}

	fastareader(chars) {
		let headersToPush = ''
		for (let step1 = 0; step1 < chars.length; step1++) {
			if (chars[step1] === '>') {
				while (chars[step1 + 1] !== '\n' && step1 + 1 < chars.length) {
					headersToPush += chars[step1 + 1]
					step1++
				}
				this.headers.push(headersToPush)
				headersToPush = ''
			}
		}
		return 0
	}
}
