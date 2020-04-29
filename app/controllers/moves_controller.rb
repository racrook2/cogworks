class MovesController < ApplicationController
  def index
    render json: ::Move.all
  end

  def show
    render json: ::Move.find(params[:id])
  end
end
