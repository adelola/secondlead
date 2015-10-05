var DramaModel = Backbone.Model.extend({
	urlRoot: '/drama',
});

var drama = new DramaModel();

var DramasCollection = Backbone.Collection.extend({
	model: DramaModel,
	url: '/dramas'
});

var dramas = new DramasCollection();