class ActivitiesController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order('created_at DESC').where('id < ?', params[:id]).limit(5)
      .select do |activity|
        !activity.trackable.nil?
      end
    render layout: false
  end
end