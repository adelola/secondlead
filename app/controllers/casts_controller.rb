class CastsController < ApplicationController
  respond_to :json, :html

  def index
    @casts = Cast.order(:name)
    respond_with(@casts)
  end

  def show
    @cast     = Cast.find(params[:id])
    @dramas   = @cast.dramas
    @response = {cast: @cast, dramas: @dramas}
    respond_to do |format|
      format.json { render json: @response }
    end
  end

  private
    def cast_params
      params.require(:cast).permit(:name, :age)
    end
end