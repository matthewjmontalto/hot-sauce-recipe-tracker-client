'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#account-status').text('Welcome!')
  setTimeout(() => $('#account-status').text(''), 5000)
}

const clearForms = () => {
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  clearForms
}
