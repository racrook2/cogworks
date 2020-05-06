class Type < ::ApplicationRecord
  has_many :pokemon_types
  has_many :pokemon, -> { order('pokemon_types.sort') }, through: :pokemon_types

  has_many :moves

  default_scope { order(:name) }
end
