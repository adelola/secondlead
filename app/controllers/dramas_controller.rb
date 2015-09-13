class DramasController < ApplicationController
  def index
     @dramas = Drama.where.not(poster_file_name: nil).limit(30)
     @genres = Genre.limit(20)
  end

  def add
  	@list = current_user.lists.find_by(name: "Watched")
  	if @list
	  @drama = Drama.find_by(id: params[:drama_id])
	  	unless @list.dramas.find_by(id: @drama.id)
	  	  @drama.add_to_list(@list)
	  	end
  	end
  	redirect_to dramas_path
  end
end
