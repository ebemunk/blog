const d3 = require('d3')
const nlp = require('compromise')
const data = require('./google-nlp.json')

const res = data
  .map(d => nlp(d.statement).match('i love you #Noun').json())
  .filter(d => d.length)
  .map(d => d.map(dd => dd.terms))
  .flat(2)
  .map(d => d.text.toLowerCase())
  .filter(d => !['i', 'love', 'you'].includes(d))

const ah = d3
  .rollups(
    res,
    v => v.length,
    d => d
  )
  .sort((a, b) => b[1] - a[1])

console.log(ah)
