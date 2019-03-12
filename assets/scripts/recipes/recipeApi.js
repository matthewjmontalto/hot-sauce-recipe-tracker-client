const config = require('../config.js')
const store = require('../store.js')

const createRecipe = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getRecipes = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = recipeId => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = (formData, recipeId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createRecipe,
  getRecipes,
  deleteRecipe,
  updateRecipe
}
