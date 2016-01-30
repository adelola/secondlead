class RelationshipsController < ApplicationController
  respond_to :json, :html

  def create
    user = User.find_by(id: params[:followed_id])
    current_user = User.find_by(id: params[:follower_id])
    if current_user.follow(user)
        render json: { message: "#{current_user.username} is following #{user.username}" }
    else
        render json: { errors: "Oops, something went wrong." }
    end
    
  end

  def destroy
    user = Relationship.find(params[:id]).followed
    current_user.unfollow(user)
    redirect_to user
  end
end