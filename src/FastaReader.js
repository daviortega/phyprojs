'use strict'

module.exports =
class FastaReqder {
	constructor() {
		this.headers = []
		this.sequences = []
	}

	fastareader(chars) {
		let headersToPush = ''
		let sequencesToPush = ''
		for (let x = 0; x < chars.length; x++) {
			if (chars[x] === '>') {
				if (sequencesToPush !== '') {
					this.sequences.push(sequencesToPush)
					sequencesToPush = ''
				}
				while (chars[x + 1] !== '\n' && x + 1 < chars.length) {
					headersToPush += chars[x + 1]
					x++
				}
				this.headers.push(headersToPush)
				headersToPush = ''
			}
			sequencesToPush += chars[x]
		}
		this.sequences.push(sequencesToPush)
		return 0
	}
}
