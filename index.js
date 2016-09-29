
var validity = require('validity')
  , isValid = require('./lib/url-validator')

module.exports = validity.createValidatorAllowingFailureMessageOverride(
  validity.booleanToCallback(isValid), '#{name} must be a valid URL')
