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
  authUi.clearForms()
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

const onSignOut = (event) => {
  event.preventDefault()

  authApi.signOut()
    .then(authUi.signOutSuccess)
    // reset form fields
    .then(authUi.clearForms)
    .catch(authUi.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  authApi.changePassword(formData)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)

  // reset form fields
  authUi.clearForms()
}

const addAuthHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password-button').on('click', authUi.clearForms)
}

module.exports = {
  addAuthHandlers
}
