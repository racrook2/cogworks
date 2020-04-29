class AbilitiesController < ApplicationController
  def index
    render json: ::Ability.all
  end

  def show
    render json: ::Ability.find(params[:id])
  end
end
