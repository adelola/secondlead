class App.Views.Users extends Backbone.View
  template: JST["backbone/users/templates/list_users"]

  initialize: ->
    @collection.on('reset', @addAll)

  addAll: =>
    @collection.each(@addOne)

  addOne: (user) =>
    itemView = new App.Views.User({model: user})
    @$("tbody").append(itemView.render().el)

  render: ->
    @$el.html(@template(@collection.toJSON()))
    @