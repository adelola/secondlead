class RelationshipsController < ApplicationController
  respond_to :json, :html

  def find
    if relationship = Relationship.find_by(follower_id: params[:follower_id], followed_id: params[:followed_id])
      respond_with(relationship.id)
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def create
    followed_user = User.find_by(id: params[:followed_id])
    user = User.find_by(id: params[:follower_id])
    if user.follow(followed_user)
        relationship = Relationship.find_by(follower_id: user.id , followed_id: followed_user.id)
        respond_with(relationship)
    else
        render json: { errors: "Oops, something went wrong." }
    end
    
  end

  def destroy
    relationship = Relationship.find(params[:id])
    if relationship.destroy
        render json: { message: "Relationship severed." }
    else
        render json: { errors: "Oops, something went wrong." }
    end
  end
end