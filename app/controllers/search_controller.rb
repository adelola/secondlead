class SearchController < ApplicationController
  def search
    if params[:q].present?
      @results = Drama.search(params[:q], index_name: [Drama.searchkick_index.name, User.searchkick_index.name, Genre.searchkick_index.name, List.searchkick_index.name, Cast.searchkick_index.name])
    else
      @results = []
    end
  end
end
