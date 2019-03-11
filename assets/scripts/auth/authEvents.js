const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  authApi.signIn(formData)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)

  // resets form fields
  $('#sign-in-form').trigger('reset')
}

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  authApi.signUp(formData)
    .then(authUi.signUpSuccess)
    // sign in user following successfull sign-up
    .then(() => {
      onSignIn(event)
    })
    .then(() => {
      // resets form fields, but not before onSignIn runs
      authUi.clearForms()
    })
    .catch(() => {
      authUi.signUpFailure()
      authUi.clearForms()
    })
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  authApi.changePassword(formData)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)

  // resets form fields
  $('#change-password-form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()

  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const addHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
