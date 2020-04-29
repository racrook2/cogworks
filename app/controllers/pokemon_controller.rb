class PokemonController < ApplicationController
  def index
    render json: ::Pokemon.includes(:abilities).includes(:types).all.map(&:details)
  end

  def show
    render json: ::Pokemon.includes(:abilities).includes(:types).find(params[:id]).details
  end
end
