Rails.application.routes.draw do
  root 'static_pages#index'
  mount Buttercms::Engine => '/blog'

  resources :genres
  resources :casts, defaults: {:format => 'json'}

  resources :dramas, only: [:index, :show], defaults: {:format => 'json'}

  resources :users,:defaults => {:format => "json"} do
    member do
      get :following, :followers
    end
    resources :lists
  end

  resources :relationships, only: [:create, :destroy]

  resources :reviews, only: [:create, :update, :destroy]

  match 'search', to: 'search#search', via: 'get'
  match '/auth/register',     to: 'auth#register',     via: 'post'
  match '/auth/login', to: 'auth#login', via: 'post'
  match '/auth/token_status', to: 'auth#token_status', via: 'get'
  match '/dramas/:drama_id/add', to: 'dramas#add', as: 'add_to_list', via: 'post'

end

