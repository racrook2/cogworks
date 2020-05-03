class MovesController < ApplicationController
  def index
    render json: ::Move.includes(:type).map(&:details)
  end

  def show
    render json: ::Move.includes(:type).find(params[:id]).details
  end
end
