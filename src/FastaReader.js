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
				if (chars[x] !== 'A' && chars[x] !== 'C' && chars[x] !== 'D' && chars[x] !== 'E' && chars[x] !== 'F' && chars[x] !== 'G' && chars[x] !== 'H' && chars[x] !== 'I' && chars[x] !== 'L' && chars[x] !== 'M' && chars[x] !== 'N' && chars[x] !== 'P' && chars[x] !== 'Q' && chars[x] !== 'R' && chars[x] !== 'S' && chars[x] !== 'T' && chars[x] !== 'V' && chars[x] !== 'Y' && chars[x] !== 'W' && chars[x] !== 'U' && chars[x] !== 'O' && chars[x] !== 'X')
					throw Error('Not a valid FASTA - Invalid character in sequence header1')
				sequencesToPush += chars[x]
			}
		}
		this.sequences.push(sequencesToPush)
		return 0
	}
}
