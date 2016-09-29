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
