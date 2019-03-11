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

module.exports = {
  createRecipe
}
