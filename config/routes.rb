Rails.application.routes.draw do
  root 'static_pages#index'
  mount Buttercms::Engine => '/blog'
  
  resources :genres
  resources :casts
  
  resources :sessions, :only => [:new, :create]
  delete '/sessions' => 'sessions#destroy'
  
  resources :dramas, only: [:index, :show],:defaults => {:format => "json"}
  post '/dramas/:drama_id/add' => 'dramas#add', as: 'add_to_list'
 
  resources :users, only: [:show, :new, :create, :edit, :update, :destroy] do
    member do
      get :following, :followers
    end
    resources :lists
  end 

  resources :relationships, :only => [:create, :destroy]

  resources :reviews, only: [:create, :update, :destroy]

  get '/example' => 'example#index'

end

