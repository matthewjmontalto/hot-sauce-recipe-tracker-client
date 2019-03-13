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
  recipeUi.addHiddenClass('#create-recipe-view')
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

const onUpdateRecipe = event => {
  event.preventDefault()

  const recipeId = $(event.target).data('id')
  const formData = getFormFields(event.target)

  recipeApi.updateRecipe(formData, recipeId)
    .then(() => onGetRecipes(event))
    .catch(recipeUi.updateRecipeFailure)
}

const onNewRecipe = (event) => {
  event.preventDefault()
  recipeUi.addHiddenClass('.recipes')
  recipeUi.removeHiddenClass('#create-recipe-view')

}

const addRecipeHandlers = () => {
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#show-recipes-nav').on('click', onGetRecipes)
  $('#recipe-display').on('click', '.delete-recipe', onDeleteRecipe)
  $('#recipe-display').on('submit', '#update-recipe-form', onUpdateRecipe)
  $('#new-recipe-nav').on('click', onNewRecipe)
}

module.exports = {
  addRecipeHandlers
}
