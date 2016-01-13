class ListsController < ApplicationController
  before_action :find_list, only: [:show, :update, :destroy]
  respond_to :json, :html

  def index
  	find_user
  	@lists = @user.lists
    respond_with(@lists)
  end
  
  def show
    @dramas = @list.dramas.map { |drama| drama.add_image_url }
    respond_with({list: @list, dramas: @dramas})
  end

  def create
  	@list = List.new(list_params)
    @list.user = find_user
  	if @list.save
      render json: { list: @list} 
  	else
  	  render json: { errors: "Oops, something went wrong." }
  	end
  end

  def update
    if @list.update_attributes(list_params)
      render json: { message: "List successfully updated" }
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def destroy
  	if @list.destroy
  	  render json: { message: "List successfully created" }
  	else
      render json: { errors: "Oops, something went wrong." }
    end
  end


  private
  
  def find_user
  	@user = User.find(params[:user_id])
  end

  def find_list
  	find_user
  	@list = @user.lists.find(params[:id])
  end

  def list_params
    params.permit(:name, :description)
  end


end