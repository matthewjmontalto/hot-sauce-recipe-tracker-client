'use strict'

const authEvents = require('./auth/authEvents')
const recipeEvents = require('./recipes/recipeEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addAuthHandlers()
  recipeEvents.addRecipeHandlers()
})
