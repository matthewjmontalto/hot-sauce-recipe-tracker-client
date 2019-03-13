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
  $('#sign-up-button, #sign-in-button, #sign-in-form').addClass('hidden')
  $('#change-password-button, #sign-out-button, #new-recipe-nav, #show-recipes-nav').removeClass('hidden')
}

const signInFailure = () => {
  console.log('sign-in failed')
}

const signOutSuccess = () => {
  $('#sign-up-button, #sign-in-button, #sign-in-form').removeClass('hidden')
  $('#change-password-button, #sign-out-button, #new-recipe-nav, #show-recipes-nav, .recipe-dialogue').addClass('hidden')
  console.log('signed out')
  // clear local user session data
  store.user = null
}

const signOutFailure = () => {
  console.log('failed to sign out')
}

const changePasswordSuccess = () => {
  $('#change-status').text('Password updated.')
  setTimeout(() => $('#change-status').text(''), 5000)
}

const changePasswordFailure = () => {
  $('#change-status').text('Unable to update password.')
  setTimeout(() => $('#change-status').text(''), 5000)
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
  changePasswordSuccess,
  changePasswordFailure,
  clearForms
}
