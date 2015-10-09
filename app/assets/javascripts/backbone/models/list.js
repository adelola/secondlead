var ListModel = Backbone.Model.extend({
	idAttribute: 'id',
	urlRoot: function() {
      return '/users/' + this.get('user_id') + '/lists';
    }
  });


var list = new ListModel();

var ListsCollection = Backbone.Collection.extend({
	model: ListModel,
	url: function() {
   
    return this.baseUrl;
    },

	initialize: function(models, options) {
     this.baseUrl = options.url;
    }
}); 


var lists = new ListsCollection();