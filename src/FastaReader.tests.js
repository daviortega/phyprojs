/* eslint-disable no-unused-expressions */
'use strict'

let expect = require('chai').expect,
	FastaReader = require('./FastaReader.js')

describe('Fasta reader test suite', function() {
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
		it('read two headers right', function() {
			let fr = new FastaReader(),
				fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
				expectedHeaders = ['header1', 'header2']
			fr.fastareader(fasta)
			expect(fr.headers).to.eql(expectedHeaders)
		})
		it('read two sequences right', function() {
			let fr = new FastaReader(),
				fasta = '>header1\nDAVIDAVIDAVI\n>header2\nDDDAAAVVVIII\n',
				expectedSequences = ['DAVIDAVIDAVI', 'DDDAAAVVVIII']
			fr.fastareader(fasta)
			expect(fr.sequences).to.eql(expectedSequences)
		})
	})
	describe('Intermediate: ', function() {
		it('read two headers right', function() {
			let fr = new FastaReader(),
				fasta = '>header1\nDAVIDA\n\nVIDAVIIIIIII\n>header2\nDDDAA\nAVVVIII\n',
				expectedHeaders = ['header1', 'header2']
			fr.fastareader(fasta)
			expect(fr.headers).to.eql(expectedHeaders)
		})
		it('read two sequences right', function() {
			let fr = new FastaReader(),
				fasta = '>header1\nDAVIDA\n\nVIDAVI\n>header2\nDDDAA\nAVVVIII\n',
				expectedSequences = ['DAVIDAVIDAVI', 'DDDAAAVVVIII']
			fr.fastareader(fasta)
			expect(fr.sequences).to.eql(expectedSequences)
		})
	})
	describe('Catching Errors ', function() {
		it('no ">" at the first character should make invalid FASTA', function() {
			let fr = new FastaReader(),
				fasta = 'header1\nDAVIDA\n\nVIDAVIIIIIII\n>header2\nDDDAA\nAVVVIII\n'
			expect(function() {
				fr.fastareader(fasta)
			}).to.throw('Not a valid FASTA')
		})
		it('no invalid characters in the sequence.', function() {
			let fr = new FastaReader(),
				fasta = '>header1\nDAVIDA\n\nVIDAVIIIIIII\nheader2\nDDDAA\nAVVVIII\n'
			expect(function() {
				fr.fastareader(fasta)
			}).to.throw('Not a valid FASTA - Invalid character in sequence header1')
		})
	})
})

