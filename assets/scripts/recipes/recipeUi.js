'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const createRecipeSuccess = (responseData) => {
  console.log(responseData)
}

const createRecipeFailure = () => {
  console.log('Failed to create recipe')
}

const getRecipeSuccess = (responseData) => {
  console.log(store.recipes)
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#recipe-display').html(showRecipesHtml)
}

const getRecipeFailure = () => {
  console.log('failed to retrieve recipes')
}

const clearForms = () => {
  $('form').trigger('reset')
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  getRecipeSuccess,
  getRecipeFailure,
  clearForms
}
