Rails.application.routes.draw do

  mount Buttercms::Engine => '/blog'

  resources :genres
  resources :casts

  root 'dramas#index'
end