var stopwords = require('./stopwords.json')

module.exports = function (word) {
  return !!stopwords[word.toLowerCase().replace(/[^a-z]/g, '')]
}

// module.exports = function (word) {
//   var strippedWord = word.toLowerCase().replace(/[^a-z]/g, '')
//   return strippedWord.split('').reduce(function (node, letter, index) {
//     if(!node)
//       return false

//     var nextNode = node[letter]

//     if(!nextNode)
//       return false

//     if(index === strippedWord.length - 1)
//       return nextNode.sw || false

//     return nextNode
//   }, stopwords)
// }