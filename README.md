# validity-url

Validity style validator to ensure that a property is a valid URL.

As part of the modularisation of [validity](https://github.com/serby/validity), this replaces the built-in `validity.url`.

[![build status](https://secure.travis-ci.org/serby/validity-url.svg)](http://travis-ci.org/serby/validity-url)
[![dependency status](https://david-dm.org/serby/validity-url.svg)](https://david-dm.org/serby/validity-url)

## Installation

```
npm install --save validity-url
```

## Usage

```js

const schemata = require('schemata')
  , url = require('validity-url')
  , schema = schemata(
    { webAddress:
      { validators: [ url ] }
    })
  , schemaWithCustomMessage = schemata(
    { webAddress:
      { validators: [ url.setFailureMessage('#{name} not valid') ] }
    })

schema.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Web Address must be a valid URL'
})

schemaWithCustomMessage.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Web Address not valid'
})

```

## Credits
[Paul Serby](https://github.com/serby/)

## License

ISC
