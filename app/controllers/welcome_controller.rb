class WelcomeController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order('created_at DESC').limit(50)
      .select do |activity|
        !activity.key.include?("destroy")
      end
  end
end
