class ReviewsController < ApplicationController
  before_action :set_review, only: [:update, :destroy]

  def create
    @drama = Drama.find_by(id: params[:drama_id])
    @review = @drama.reviews.build(new_review_params)
    if @review.save
      redirect_to drama_path(@drama)
    end
  end

  def update
    if @review.update_attributes(update_params)
      redirect_to drama_path(@drama)
    end
  end

  def destroy
  	@review.destroy
  	redirect_to drama_path(@drama)
  end

  private

    def set_review
      @review = Review.find_by(id: params[:review_id])
    end

    def new_review_params
      params.require(:review).permit(:drama, :rating, :body, :reviewer)
    end

    def update_params
      params.require(:review).permit(:rating, :body)
    end

end
