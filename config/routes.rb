Rails.application.routes.draw do
  root 'static_pages#index'
  mount Buttercms::Engine => '/blog'
  resources :genres
  resources :casts
  resources :dramas, only: [:index]
  resources :users, only: [:show, :new, :create,:edit, :update, :destroy]
end