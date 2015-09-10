Rails.application.routes.draw do
  root 'static_pages#index'
  get 'example' => 'example#index'
  mount Buttercms::Engine => '/blog'
  resources :lists, :only => [:show, :new, :create, :edit, :update, :destroy]
  resources :genres
  resources :casts
  resources :sessions, :only => [:new, :create]
  delete '/sessions' => 'sessions#destroy'
  resources :dramas, only: [:index, :show]
  resources :users, only: [:show, :new, :create, :edit, :update, :destroy]
end

