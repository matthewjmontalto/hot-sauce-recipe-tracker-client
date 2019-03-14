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
    .then(() => recipeUi.clearForms())
    .catch(recipeUi.createRecipeFailure)
}

const onGetRecipes = event => {
  event.preventDefault()
  recipeUi.addHiddenClass('#create-recipe-view')
  recipeUi.addHiddenClass('.main-pepper-logo')
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
    .then(recipeUi.clearForms)
    .then(() => onGetRecipes(event))
    .catch(recipeUi.updateRecipeFailure)
}

const onNewRecipeView = event => {
  event.preventDefault()
  recipeUi.addHiddenClass('.recipes')
  recipeUi.removeHiddenClass('#create-recipe-view')
  recipeUi.addHiddenClass('.main-pepper-logo')
}

const onUpdateButton = event => {
  event.preventDefault()

  const currentRecipe = $(event.target).data('id')

  recipeUi.removeHiddenClass(`form[data-id="${currentRecipe}"]`)
  recipeUi.addHiddenClass('.update-recipe')
  recipeUi.addHiddenClass('.delete-recipe')
}

const onUpdateCancel = event => {
  event.preventDefault()

  const currentRecipe = $(event.target).data('id')

  recipeUi.clearForms()
  recipeUi.addHiddenClass(`form[data-id="${currentRecipe}"]`)
  recipeUi.removeHiddenClass('.update-recipe')
  recipeUi.removeHiddenClass('.delete-recipe')
}

const addRecipeHandlers = () => {
  $('#create-recipe-form').on('submit', onCreateRecipe)
  $('#show-recipes-nav').on('click', onGetRecipes)
  $('#recipe-display').on('click', '.delete-recipe', onDeleteRecipe)
  $('#recipe-display').on('submit', '.update-recipe-form', onUpdateRecipe)
  $('#recipe-display').on('click', '.cancel-update-button', onUpdateCancel)
  $('#recipe-display').on('click', '.update-recipe', onUpdateButton)
  $('#new-recipe-nav').on('click', onNewRecipeView)
}

module.exports = {
  addRecipeHandlers
}
