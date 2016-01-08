class DramasController < ApplicationController
  respond_to :json, :html

  def index
    @dramas = Drama.fetch
    @genres = Genre.limit(20)
    respond_with(@dramas)
  end

  def show
    @drama = Drama.find_by(id: params[:id])
    respond_with(@drama)
  end

  def create
    list = List.find_by(id: params[:list_id])
    drama = Drama.find_by(id: params[:id])
    unless list.dramas.find_by(id: drama.id)
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
