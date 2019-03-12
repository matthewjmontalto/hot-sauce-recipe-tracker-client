'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const createRecipeSuccess = (responseData) => {
  // console.log(responseData)
}

const createRecipeFailure = () => {
  console.log('Failed to create recipe')
}

const getRecipeSuccess = (responseData) => {
  console.log(responseData)
  // converts ingredients string into an array for all recipe objects returned
  responseData.recipes.forEach(recipe => {
    recipe.ingredients = recipe.ingredients.split('\n')
  })
  const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
  $('#recipe-display').html(showRecipesHtml)
}

const getRecipeFailure = () => {
  console.log('failed to retrieve recipes')
}

const updateRecipeFailure = () => {
  console.log('failed to update recipe')
}

const clearForms = () => {
  $('form').trigger('reset')
}

const clearRecipes = () => {
  $('#recipe-display').empty()
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  getRecipeSuccess,
  getRecipeFailure,
  updateRecipeFailure,
  clearRecipes,
  clearForms
}
