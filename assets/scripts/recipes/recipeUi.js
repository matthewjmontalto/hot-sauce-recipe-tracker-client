'use strict'

const createRecipeSuccess = () => {
  console.log('recipe created')
}

const createRecipeFailure = () => {
  console.log('Failed to create recipe')
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure
}
