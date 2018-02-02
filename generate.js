const fs = require('fs')

fs.writeFileSync('stopwords.json', 
  JSON.stringify(
    fs.readFileSync('stopwords.txt', 'utf8')
      .split('\r\n')
      .reduce((result, word) => ({ ...result, [word.toLowerCase().replace(/[^a-z]/g, '')]: 1 }), {})    
  )
)