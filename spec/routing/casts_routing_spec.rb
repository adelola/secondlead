require "rails_helper"

RSpec.describe CastsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/casts").to route_to("casts#index")
    end

    it "routes to #new" do
      expect(:get => "/casts/new").to route_to("casts#new")
    end

    it "routes to #show" do
      expect(:get => "/casts/1").to route_to("casts#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/casts/1/edit").to route_to("casts#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/casts").to route_to("casts#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/casts/1").to route_to("casts#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/casts/1").to route_to("casts#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/casts/1").to route_to("casts#destroy", :id => "1")
    end

  end
end
