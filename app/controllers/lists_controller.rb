class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  
  def show
  end

  def new
  	@list = List.new
  end

  def create
  	@list = List.new(list_params)
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
    if @list.user == current_user && @list.update_attributes(list_params)
      redirect_to user_path(current_user), notice: "Updated #{@list.name}"
    else
      render :edit
    end
  end

  def destroy
  	if @list.user == current_user 
  	  @list.destroy
  	  redirect_to user_path(current_user), notice: "Deleted #{@list.name}"
  	end
  end


  private

  def find_list
  	@list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name, :description)
  end


end