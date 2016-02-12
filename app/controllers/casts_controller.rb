class CastsController < ApplicationController
  before_action :set_cast, only: [:show]
  respond_to :json, :html

  def index
    @casts = Cast.order(:name)
    respond_with(@casts)
  end

  def show
    respond_to do |format|
      format.json { render json: @cast }
    end
  end

  private
    def set_cast
      @cast = Cast.find(params[:id])
    end

    def cast_params
      params.require(:cast).permit(:name, :age)
    end
end