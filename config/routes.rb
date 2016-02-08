Rails.application.routes.draw do
  root 'welcome#index'
  mount Buttercms::Engine => '/blog'

  resources :genres
  resources :casts, defaults: {:format => 'json'}

  resources :dramas, only: [:index, :show], defaults: {:format => 'json'} do
    resources :ratings, except: [:new, :edit]
    resources :reviews, except: [:new, :edit]
  end


  resources :users,:defaults => {:format => "json"} do
    member do
      get :following, :followers
    end
    resources :lists, except: [:new, :edit] do
      resources :dramas, only: [:create, :destroy], defaults: {:format => 'json'}
    end
  end

  resources :relationships, only: [:create, :destroy], defaults: {:format => 'json'}

  match '/search', to: 'search#search', via: 'get', :format => 'json'
  match '/auth/register',     to: 'auth#register',     via: 'post'
  match '/auth/login', to: 'auth#login', via: 'post'
  match '/auth/token_status', to: 'auth#token_status', via: 'get'
  match 'ratings/find', to: 'ratings#find', via: 'get', :format => 'json'
  match 'reviews/find', to: 'reviews#find', via: 'get', :format => 'json'
  match '/activities', to: 'activities#index', via: 'get'
  match 'relationships/find', to: 'relationships#find', via: 'get', :format => 'json'
end