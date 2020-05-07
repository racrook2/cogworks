class Type < ::ApplicationRecord
  has_many :pokemon_types
  has_many :pokemon, -> { order('pokemon_types.sort') }, through: :pokemon_types

  has_many :moves

  has_many :attackings, foreign_key: :attacking_id, class_name: ::AttackingsDefending.to_s
  has_many :defendings, foreign_key: :defending_id, class_name: ::AttackingsDefending.to_s

  default_scope { order(:name) }

  WEAKNESS = 2
  RESISTANCE = 0.5
  IMMUNITY = 0

  def weaknesses
    type_relations(WEAKNESS)
  end

  def resistances
    type_relations(RESISTANCE)
  end

  def immunities
    type_relations(IMMUNITY)
  end

  private

  def type_relations(multiplier)
    defendings.includes(:attacking).each_with_object([]) do |defending, memo|
      memo << defending.attacking if defending.multiplier == multiplier
    end
  end
end
