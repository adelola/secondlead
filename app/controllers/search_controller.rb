class SearchController < ApplicationController
  respond_to :json, :html

  def search
    dramas = Drama.search(params[:q], index_name: [Drama.searchkick_index.name])
    users = User.search(params[:q], index_name: [User.searchkick_index.name])
    casts = Cast.search(params[:q], index_name: [Cast.searchkick_index.name])
    @results = {dramas: dramas, users: users, casts: casts}
    if @results 
      respond_with(@results)
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

  def filter
    # country =  params[:country][0][:name]
    if genres = params[:genres].map {|x| x[:value]}
      dramas = genres.map do |genre|
        Genre.find_by(name: genre).dramas
      end
      @results = dramas.inject(:&)
      if country =  params[:country][0][:name]
        @results = @results.select { |drama| drama.language == country}
      end
    elsif country && !genres
      @results = Drama.where(language: country)
    end

    if @results 
       render json: { dramas: @results}
    else
      render json: { errors: "Oops, something went wrong." }
    end
  end

end
