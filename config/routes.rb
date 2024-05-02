Rails.application.routes.draw do
    #resources :users
  
    namespace :api do:

        post '/signup', to: 'users#create'
        get '/auth', to: 'users#show'
        post '/login', to: 'sessions#create'
        delete '/logout', to: 'sessions#destroy'

    end 
  
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
end
