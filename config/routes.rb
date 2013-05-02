Sortable::Application.routes.draw do
  resources :fruits	
  root :to => 'fruits#index'
  match "/fruits/update_position" => "fruits#update_position", :via => :post
end
