# isStopword

A simple, efficient function to determine if a word is an English stop word.

The list of words used can be found in the [`stopwords.txt`](https://github.com/danderson00/isStopword/blob/master/stopwords.txt) file on github.

## Node.js

You can consume the package from Node.js as follows:

### Installation

    npm install isstopword

### Usage

```Javascript
var isStopword = require('isstopword')
console.log(isStopword('about'))
```

## Browser

You can also consume the package from the browser by using the `browser.js` file. This version attaches a function to
the `window` object called `isStopword`:

### Installation

```html
<script src="https://unpkg.com/isstopword@0.0.4/browser.js"></script>
```

### Usage

```javascript
console.log(window.isStopword('about'))
```