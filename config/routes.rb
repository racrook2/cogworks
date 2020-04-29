Rails.application.routes.draw do
  resources :abilities, only: [:index, :show]
  resources :moves, only: [:index, :show]
  resources :pokemon, only: [:index, :show]
  resources :types, only: [:index, :show]

  root to: 'home#index'
  get '/*path' => 'home#index'
end
