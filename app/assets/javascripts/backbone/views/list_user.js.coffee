class App.Views.User extends Backbone.View
  template: JST["backbone/users/templates/list_user"]
  tagName: 'tr'
  events:
    'click a.destroy' : 'destroy'

  initialize: ->
    @model.on('destroy', @removeThis)

  destroy: ->
    @model.destroy()

  removeThis: ->
    @$el.remove()


  render: ->
    @$el.html(@template(@model.toJSON()))
    @