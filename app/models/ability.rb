class Ability < ::ApplicationRecord
  has_many :abilities_pokemon
  has_many :pokemon, -> { order('abilities_pokemon.sort') }, through: :abilities_pokemon
end
