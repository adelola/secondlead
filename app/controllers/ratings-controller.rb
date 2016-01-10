class RatingsController < ApplicationController
  before_action :set_rating, only: [:show, :update, :destroy]

  def index
    drama = Drama.find_by(id: params[:drama_id])
    score = drama.avg_rating
    respond_with(score)
  end

  def show
    respond_with(@rating)
  end

  def create
    drama = Drama.find_by(id: params[:drama_id])
    @rating = drama.ratings.build(new_rating_params)
    if @rating.save
      respond_with(@rating)
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def update
    if @rating.update_attributes(update_params)
      render json: { message: "Rating successfully updated" }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def destroy
    if @rating.destroy
      render json: { message: "Rating successfully deleted" }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  private

    def set_rating
      @rating = Rating.find_by(id: params[:id])
    end

    def new_rating_params
      params.require(:rating).permit(:drama_id, :weight, :rater_id)
    end

    def update_params
      params.require(:rating).permit(:weight)
    end

end