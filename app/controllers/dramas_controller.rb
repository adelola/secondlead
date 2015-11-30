class DramasController < ApplicationController
  respond_to :json, :html

  def index
     @dramas = Drama.fetch
     @genres = Genre.limit(20)
     respond_with(@dramas)
  end

  def add
    if current_user
      @list = current_user.lists.find_by(name: "Watched")
    end
  	if @list
	    @drama = Drama.find_by(id: params[:drama_id])
	  	unless @list.dramas.find_by(id: @drama.id)
	  	  @drama.add_to_list(@list)
	  	end
  	end
  	redirect_to dramas_path
  end

  def show
    @drama = Drama.find_by(id: params[:id])
  end
end
