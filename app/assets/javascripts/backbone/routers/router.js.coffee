App = start: ->
  new App.UsersRouter
  Backbone.history.start

class App.UsersRouter extends Backbone.Router

  routes: 
    "users" : "listUsers"

  listUsers: ->
    users = new App.Models.Users
    users.fetch()

    collectionView = new App.Views.Users
      collection: users
    $("#users").html(collectionView.render().el)


