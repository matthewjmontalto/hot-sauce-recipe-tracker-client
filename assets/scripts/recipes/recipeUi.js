'use strict'

const store = require('../store.js')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const createRecipeSuccess = (responseData) => {
  recipeFailure('Recipe Created!')
}

const createRecipeFailure = () => {
  recipeFailure('Failed to create recipe')
}

const getRecipeSuccess = (responseData) => {
  if (responseData.recipes.length === 0) {
    recipeFailure('You need to create some recipes!')
  } else {
  // converts ingredients string into an array for all recipe objects returned
    responseData.recipes.forEach(recipe => {
      recipe.ingredients = recipe.ingredients.split('\n').filter(i => i.replace(/\s/g, '') !== '')
    })
    const showRecipesHtml = showRecipesTemplate({ recipes: responseData.recipes })
    $('#recipe-display').html(showRecipesHtml)
  }
}

const getRecipeFailure = () => {
  recipeFailure('failed to retrieve recipes')
}

const updateRecipeFailure = () => {
  recipeFailure('failed to update recipe')
}

const recipeFailure = (info) => {
  $('.user-dialogue').removeClass('hidden')
  $('#authentication-reponse').text(`${info}`)
  setTimeout(() => {
    $('.user-dialogue').addClass('hidden')
    $('#authentication-reponse').text('')
  }, 3000)
}

const clearForms = () => {
  $('form').trigger('reset')
}

const clearRecipes = () => {
  $('#recipe-display').empty()
}

const removeHiddenClass = selector => {
  $(selector).removeClass('hidden')
}

const addHiddenClass = selector => {
  $(selector).addClass('hidden')
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  getRecipeSuccess,
  getRecipeFailure,
  updateRecipeFailure,
  clearRecipes,
  clearForms,
  removeHiddenClass,
  addHiddenClass,
  recipeFailure
}
