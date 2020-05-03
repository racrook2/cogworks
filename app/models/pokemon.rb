class Pokemon < ::ApplicationRecord
  has_many :abilities_pokemon, -> { order(:sort) }
  has_many :abilities, through: :abilities_pokemon

  has_many :pokemon_types, -> { order(:sort) }
  has_many :types, through: :pokemon_types

  default_scope { order(:number, :id) }

  def details
    attributes.merge(
      type_1: type_1,
      type_2: type_2,
      ability_1: ability_1,
      ability_2: ability_2,
      hidden_ability: hidden_ability,
      bst: bst
    )
  end

  def full_name
    subname ? "#{name} (#{subname})" : name
  end

  def type_1
    types.first
  end

  def type_2
    types.second
  end

  def ability_1
    ability(0)
  end

  def ability_2
    ability(1)
  end

  def hidden_ability
    ability(2)
  end

  def bst
    hp + atk + self.def + spa + spd + spe
  end

  private

  def ability(sort)
    abilities.find do |ability|
      ability_relation = abilities_pokemon.find do |ability_relation|
        ability_relation.sort == sort
      end

      ability.id == ability_relation&.ability_id
    end
  end
end
