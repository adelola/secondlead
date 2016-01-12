class ReviewsController < ApplicationController
  before_action :set_review, only: [:update, :destroy]
  respond_to :json, :html

  def index
    @drama = Drama.find_by(id: params[:drama_id])
    @reviews = @drama.reviews
    respond_with(@reviews)  
  end

  def create
    drama = Drama.find_by(id: params[:drama_id])
    review = drama.reviews.build(new_review_params)
    if review.save
      render json: { review: review} 
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def find
    review = Review.find_by({drama_id: params[:drama_id], reviewer_id: params[:reviewer_id]})
    if review
      render json: { review: review} 
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def update
    if @review.update_attributes(update_params)
      render json: { message: "Review successfully updated." }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def destroy
  	if @review.destroy
      render json: { message: "Review successfully deleted." }
    else
      render json: { errors: "Oops, something went wrong." }
    end 	
  end

  private

    def set_review
      @review = Review.find_by(id: params[:id])
    end

    def new_review_params
      params.permit(:drama_id, :body, :reviewer_id)
    end

    def update_params
      params.permit(:body)
    end

end
