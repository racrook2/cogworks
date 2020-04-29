class TypesController < ApplicationController
  def index
    render json: ::Type.all
  end

  def show
    render json: ::Type.find(params[:id])
  end
end
