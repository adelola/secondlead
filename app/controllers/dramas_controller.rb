class DramasController < ApplicationController
  def index
     @dramas = Drama.where.not(poster_file_name: nil).limit(20)
  end
end
