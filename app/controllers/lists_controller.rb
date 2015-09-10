class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  
  def show
  end

  def new
  	@list = List.new
  end

  def create
  	@list = List.new(new_list_params)
    @list.user = current_user
  	if @list.save
      redirect_to user_path(current_user), notice: "Added #{@list.name}"
  	else
  	  render :new
  	end
  end

  def edit
  end

  def update
  end

  def destroy
  end


  private

  def find_list
  	@list = List.find(params[:id])
  end

  def new_list_params
    params.require(:list).permit(:name, :description)
  end


end