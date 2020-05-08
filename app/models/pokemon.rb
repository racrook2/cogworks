class Pokemon < ::ApplicationRecord
  has_many :abilities_pokemon, -> { order(:sort) }
  has_many :abilities, through: :abilities_pokemon

  has_many :pokemon_types, -> { order(:sort) }
  has_many :types, through: :pokemon_types

  has_one :evos_prevo, foreign_key: :evo_id
  has_one :prevo, through: :evos_prevo

  has_many :evos_prevos, foreign_key: :prevo_id
  has_many :evos, through: :evos_prevos

  default_scope { order(:number, :id) }

  def details
    @details ||= attributes.merge(
      type_1: type_1,
      type_2: type_2,
      ability_1: ability_1,
      ability_2: ability_2,
      hidden_ability: hidden_ability,
      bst: bst
    )
  end

  def full_name
    @full_name ||= subname ? "#{name} (#{subname})" : name
  end

  def type_1
    @type_1 ||= types.first
  end

  def type_2
    @type_2 ||= types.second
  end

  def ability_1
    @ability_1 ||= ability(0)
  end

  def ability_2
    @ability_2 ||= ability(1)
  end

  def hidden_ability
    @hidden_ability ||= ability(2)
  end

  def bst
    @bst ||= hp + atk + self.def + spa + spd + spe
  end

  def weaknesses
    @weaknesses ||= all_weaknesses.uniq
  end

  def quad_weaknesses
    @quad_weaknesses ||= quad_relations(all_weaknesses)
  end

  def weak_to?(type)
    weaknesses.include?(type)
  end

  def quad_weak_to?(type)
    quad_weaknesses.include?(type)
  end

  def resistances
    @resistances ||= all_resistances.uniq
  end

  def quad_resistances
    @quad_resistances ||= quad_relations(all_resistances)
  end

  def resists?(type)
    resistances.include?(type)
  end

  def quad_resists?(type)
    quad_resistances.include?(type)
  end

  def immunities
    @immunities ||= (type_1.immunities + type_2.immunities).uniq.sort
  end

  def immune_to?(type)
    immunities.include?(type)
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

  def all_weaknesses
    @all_weaknesses ||= (
      type_1.weaknesses + type_2.weaknesses -
        type_1.resistances - type_2.resistances -
        type_1.immunities - type_2.immunities
    ).sort
  end

  def all_resistances
    @all_resistances ||= (
      type_1.resistances + type_2.resistances -
        type_1.weaknesses - type_2.weaknesses -
        type_1.immunities - type_2.immunities
    ).sort
  end

  def quad_relations(relation)
    relation.select { |type| relation.count(type) > 1 }.uniq
  end
end
