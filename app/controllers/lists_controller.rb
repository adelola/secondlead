class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
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
  
  def find_user
  	@user = User.find(params[:user_id])
  end

  def find_list
  	find_user
  	@list = @user.lists.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name, :description)
  end


end