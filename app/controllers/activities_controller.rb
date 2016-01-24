class ActivitiesController < ApplicationController
  respond_to :json, :html

  def index
    @activities = PublicActivity::Activity.all
    respond_with(@activities)
  end
end