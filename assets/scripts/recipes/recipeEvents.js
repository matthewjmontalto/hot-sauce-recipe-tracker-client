const getFormFields = require('../../../lib/get-form-fields.js')
const recipeApi = require('./recipeApi.js')
const recipeUi = require('./recipeUi.js')

const onCreateRecipe = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  recipeApi.createRecipe(formData)
    .then(recipeUi.createRecipeSuccess)
    // resets form fields
    .then(recipeUi.clearForms)
    .catch(recipeUi.createRecipeFailure)
}

const onGetRecipes = event => {
  event.preventDefault()

  recipeApi.getRecipes()
    .then(recipeUi.getRecipeSuccess)
    .catch(recipeUi.getRecipeFailure)
}

const onDeleteRecipe = event => {
  event.preventDefault()

  const recipeId = $(event.target).data('id')

  recipeApi.deleteRecipe(recipeId)
    .then(() => onGetRecipes(event))
    .catch(recipeUi.deleteRecipeFailure)
}

const addRecipeHandlers = () => {
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#get-recipes-button').on('click', onGetRecipes)
  $('#recipe-display').on('click', '.delete-recipe', onDeleteRecipe)
}

module.exports = {
  addRecipeHandlers
}
