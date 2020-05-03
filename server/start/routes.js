'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// authentication
Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')
Route.post('/check_login', 'UserController.check_login')
Route.post('/add_user_favorites', 'UserController.add_favorites').middleware('auth')
Route.get('/get_user_favorites', 'UserController.get_favorites').middleware('auth')
Route.get('/get_user_categories_options', 'UserController.get_categories_options').middleware('auth')
Route.post('/set_user_categories_preferences', 'UserController.set_user_categories_preferences').middleware('auth')
Route.get('/is_user_first_login', 'UserController.is_first_login').middleware('auth')