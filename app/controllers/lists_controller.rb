class ListsController < ApplicationController
  before_action :find_list, only: [:show, :edit, :update, :destroy]
  
  def show
  end


  private

  def find_list
  	@list = List.find(params[:id])
  end


end