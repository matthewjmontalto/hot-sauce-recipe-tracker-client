'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#account-status').text('Welcome!')
  setTimeout(() => $('#account-status').text(''), 5000)
}

const signUpFailure = () => {
  $('#account-status').text('Could not create account. Try again.')
  setTimeout(() => $('#account-status').text(''), 5000)
}

const signInSuccess = (responseData) => {
  store.user = responseData.user
}

const signInFailure = () => {
  console.log('sign-in failed')
}

const signOutSuccess = () => {
  console.log('signed out')
}

const signOutFailure = () => {
  console.log('failed to sign out')
}

const clearForms = () => {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  clearForms
}
