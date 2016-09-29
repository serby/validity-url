const assert = require('assert')
  , validateRequired = require('..')

describe('validity-url', function () {

  it('should return validation error if property is undefined', function (done) {

    validateRequired('url', 'Web Address', {}, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Web Address must be a valid URL')
      done()
    })
  })

  it('should return validation error if property is not an URL', function (done) {

    validateRequired('url', 'Web Address', { url: 'not a URL' }
      , (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, 'Web Address must be a valid URL')
      done()
    })
  })

  it('should be able to set a custom failure message', function (done) {

    validateRequired.setFailureMessage('No "#{name}" is not an URL')('url'
      , 'Web Address', { url: 'not a URL' }, (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, 'No "Web Address" is not an URL')
      done()
    })
  })

  it('should not return validation error if property is valid', function (done) {

    validateRequired('url', 'Web Address', { url: 'http://www.serby.net' }
      , (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, undefined)
      done()
    })
  })

})
