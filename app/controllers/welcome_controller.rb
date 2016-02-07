class WelcomeController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order('created_at DESC').limit(5)
      .select do |activity|
        !activity.trackable.nil?
      end
  end
end
