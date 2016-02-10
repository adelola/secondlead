class DramasController < ApplicationController
  respond_to :json, :html

  def all
    @dramas = Drama.all.order(:non_english_name)
    render layout: 'all'
  end

  def index
    @dramas = Drama.fetch
    @genres = Genre.limit(20)
    respond_with(@dramas)
  end

  def show
    @drama = Drama.find_by(id: params[:id])
    @casts = @drama.casts
    respond_with(drama: @drama, casts: @casts)
  end

  def create
    list = List.find_by(id: params[:list_id])
    drama = Drama.find_by(id: params[:id])
    if list.dramas.find_by(id: drama.id)
      render json: { message: "Drama is already in #{list.name}" }
    elsif list.name == 'Top Five' && list.dramas.count >= 5
      render json: { message: "You already have five dramas in your top 5" }
    else
      new_list_drama = drama.add_to_list(list)
      if new_list_drama.save
        render json: { message: "Drama successfully added to #{list.name}" }
      else
        render json: { errors: "Oops, something went wrong." }
      end
    end
  end

  def destroy
    drama = ListDrama.find_by({drama_id: params[:id], list_id: params[:list_id]})
    if drama.destroy
      render json: { message: "Drama successfully deleted." }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end
end
