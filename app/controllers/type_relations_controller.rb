class TypeRelationsController < ApplicationController
  def index
    json = ::AttackingsDefending.includes(:attacking).each_with_object({}) do |attackings_defending, memo|
      memo[attackings_defending.attacking.name] ||= {}
      memo[attackings_defending.attacking.name][attackings_defending.defending.name] = attackings_defending.multiplier
    end

    render json: json
  end
end
