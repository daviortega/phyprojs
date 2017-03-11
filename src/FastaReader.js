'use strict'

let VALIDCHAR = 'ACDEFGHILMNPQRSTVYWUOX'

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
			if (chars[0] !== '>')
				throw Error('Not a valid FASTA')
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
				x++
			}
			if (chars[x] !== '\n') {
				if (VALIDCHAR.indexOf(chars[x]) === -1) {
					throw Error(
						'Not a valid FASTA - Invalid character in sequence ' + this.headers[this.headers.length - 1]
					)
				}
				sequencesToPush += chars[x]
			}
		}
		this.sequences.push(sequencesToPush)
		return 0
	}
}
