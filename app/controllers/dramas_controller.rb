class DramasController < ApplicationController
  def index
     @dramas = Drama.all
  end
end
