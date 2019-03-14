# Hot Sauce Recipe Tracker

[Hot Sauce Recipe Tracker API Repo](https://github.com/matthewjmontalto/hot-sauce-recipe-tracker-api)
[Deployed Client](https://matthewjmontalto.github.io/hot-sauce-recipe-tracker-client/)
[Deployed Heroku Application](https://hot-sauce-recipe-tracker.herokuapp.com/)

## Thank You!

Thank you for reviewing my application!

Developing any recipe is a process of practice and refinement. Such is especially
the case for developing hot sauce recipes.

This is an application that users may use to store, track, and refine their
hot sauce recipes. The front end links with a database which was designed to
accommodate the data elements specific to hot sauce, such as ingredients used
and whether the recipe involves a fermentation step, for example. Users will
be required to establish an account, so that they may track thier recipes without
risk of affecting another user's recipes.

## Technology Used

### Front-end
- HTML5 & SCSS
- Bootsrap
- javaScript
- jQuery
- Handlbars.js
- Ajax

### API
- Ruby on rails
- Postgresql

### User Stories
- As a user, I would like to have an account
- As a user, I would like to track individula recipes
- As a user, I would like to track the ingredients and ingredient amounts that
  belong to each recipes
- As a user, I would like to be able to rate the success of the recipe on a scale
  of 1 - 5
- As a user, I would like to rate spiciness on a scale of 1 -3
- As a user, I would like to track the dates each recipe is is created

#### Stretch
- As a user, I would like calculate brine % by weight
- As a user, I would like to track ferment time as countdown
- As a user, I would like to store a pantry of ingredients to be added to recipes

## Unsolved problems
- Forms capturing boolean values represent data as true false. I would like to
  transform this in to more readable outputs.
- General device responsiveness requires imporovement.
- Styling will be imporoved over time.

## Wireframes
[wireframes](https://imgur.com/a/rX6fwnV)

## Development Process
The approach I adopted to developing my full-stack application began with
the back-end API. By building the back-end database, I had a better foundation
upon which I could develop the client. Authorization was initial set to open
read controller for testing purposes and switched to protected controller for
MVP.

The client side came after the API was solid. I began by testing routes with
curl scripts, then with simple layout html forms. Once everything was behaving
as expected, I moved on to building a more robust layout. Styling was left to
the very end of the process.
