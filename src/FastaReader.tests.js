/* eslint-disable no-unused-expressions */
'use strict'

let expect = require('chai').expect,
	FastaReader = require('./FastaReader.js')

describe('The constructor should have', function() {
	it('.headers', function() {
		let fastareader = new FastaReader()
		expect(fastareader.headers).to.exist
	})
	it('.sequences', function() {
		let fastareader = new FastaReader()
		expect(fastareader.sequences).to.exist
	})
})

describe('Basics: ', function() {
	it('read two sequence right', function() {
		let fr = new FastaReader(),
			fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
			expectedHeaders = ['header1', 'header2']
		fr.fastareader(fasta)
		expect(fr.headers).to.eql(expectedHeaders)
	})
	it('.sequences', function() {
		let fr = new FastaReader(),
			fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
			expectedSequences = ['DAVIDAVIDAVI', 'DDDAAAVVVIII']
		fr.fastareader(fasta)
		expect(fr.sequences).to.eql(expectedSequences)
	})
})
