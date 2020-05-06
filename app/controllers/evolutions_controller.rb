class EvolutionsController < ApplicationController
  def index
    render json: ::EvosPrevo.evolutions
  end
end
