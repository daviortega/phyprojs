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
		let fastareader = new FastaReader(),
			fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
			expectedHeaders = ['header1', 'header2']
		fastareader(fasta)
		expect(fastareader.headers).to.eql(expectedHeaders)
	})
	it('.sequences', function() {
		let fastareader = new FastaReader(),
			fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
			expectedSequences = ['DAVIDAVIDAVI', 'DDDAAAVVVIII']
		fastareader(fasta)
		expect(fastareader.sequences).to.eql(expectedSequences)
	})
})
