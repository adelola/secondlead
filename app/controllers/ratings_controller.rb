class RatingsController < ApplicationController
  before_action :set_rating, only: [:update, :destroy]
  respond_to :json, :html


  def index
    drama = Drama.find_by(id: params[:drama_id])
    score = drama.avg_rating
    respond_with(score)
  end

  def show
    respond_with(@rating)
  end

  def find
    @rating = Rating.find_by({drama_id: params[:drama_id], rater_id: params[:rater_id]})
    if @rating
      respond_with(@rating)
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def create
    drama = Drama.find_by(id: params[:drama_id])
    @rating = drama.ratings.build(new_rating_params)
    if @rating.save
      @rating.update_review
      render json: { message: "Rating successfully created" }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def update
    if @rating.update_attributes(update_params)
      @rating.update_review
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
      params.permit(:drama_id, :weight, :rater_id)
    end

    def update_params
      params.permit(:weight)
    end

end