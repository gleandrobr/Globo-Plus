'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// authentication
Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')
Route.post('/check_login', 'UserController.check_login')
Route.get('/users', 'UserController.list')