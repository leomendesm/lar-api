'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController').middleware('auth').apiOnly()
Route.resource('places', 'PlaceController').middleware('auth').apiOnly()
Route.resource('ratings', 'RatingController').middleware('auth').apiOnly()
Route.get('place/fetch/:query', 'PlaceController.fetchPlaces').middleware('auth')
Route.get('ranking', 'RatingController.ranking').middleware('auth')
Route.post('login', 'UserController.login')
