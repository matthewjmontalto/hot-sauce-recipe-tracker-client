// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const splitIngredients = (ingredients) => {
  // input string
  const ingredientList = ingredients.split(',')
  console.log(ingredientList)
  return ingredientList
  //
  // ingredientList.forEach((ingredient) => {
  //   return $('.ingredient-list').prepend(`<li>${ingredient}</li>`)
  // })
  // output array
}

module.exports = splitIngredients
