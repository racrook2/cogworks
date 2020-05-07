def type_name_to_id
  @type_name_to_id ||= ::Type.all.each_with_object({}) do |type, memo|
    memo[type.name] = type.id
  end
end

def ability_name_to_id
  @ability_name_to_id ||= ::Ability.all.each_with_object({}) do |ability, memo|
    memo[ability.name] = ability.id
  end
end

def pokemon_name_to_id
  @pokemon_name_to_id ||= ::Pokemon.all.each_with_object({}) do |pokemon, memo|
    memo[pokemon.full_name] = pokemon.id
  end
end

def replace_types!(records, type_key: 'type', id_key: 'type_id')
  records.each do |record|
    type_name = record.delete(type_key)

    record[id_key] = type_name_to_id[type_name]
  end
end

def replace_abilities!(records)
  records.each do |record|
    ability_name = record.delete('ability')

    record['ability_id'] = ability_name_to_id[ability_name]
  end
end

def replace_pokemon!(records, name_key: 'name', subname_key: 'subname', id_key: 'pokemon_id')
  records.each do |record|
    pokemon_name = record.delete(name_key)
    pokemon_subname = record.delete(subname_key)
    pokemon_full_name = pokemon_subname ? "#{pokemon_name} (#{pokemon_subname})" : pokemon_name

    record[id_key] = pokemon_name_to_id[pokemon_full_name]
  end
end

def seed(string)
  path = ::File.join(::File.dirname(__FILE__), "./seeds/#{string}.json")
  records = ::JSON.parse(::File.read(path))

  case string
  when 'moves'
    replace_types!(records)
  when 'pokemon_types'
    replace_pokemon!(records)
    replace_types!(records)
  when 'abilities_pokemon'
    replace_abilities!(records)
    replace_pokemon!(records)
  when 'evos_prevos'
    replace_pokemon!(
      records,
      name_key: 'evo_name',
      subname_key: 'evo_subname',
      id_key: 'evo_id'
    )

    replace_pokemon!(
      records,
      name_key: 'prevo_name',
      subname_key: 'prevo_subname',
      id_key: 'prevo_id'
    )
  when 'attackings_defendings'
    replace_types!(
      records,
      type_key: 'attacking',
      id_key: 'attacking_id'
    )

    replace_types!(
      records,
      type_key: 'defending',
      id_key: 'defending_id'
    )
  end

  string.singularize.classify.constantize.create!(records)
end

::ActiveRecord::Base.transaction do
  seed('types') if ::Type.count.zero?
  seed('pokemon') if ::Pokemon.count.zero?
  seed('abilities') if ::Ability.count.zero?
  seed('moves') if ::Move.count.zero?
  seed('pokemon_types') if ::PokemonType.count.zero?
  seed('abilities_pokemon') if ::AbilitiesPokemon.count.zero?
  seed('evos_prevos') if ::EvosPrevo.count.zero?
  seed('attackings_defendings') if ::AttackingsDefending.count.zero?
end
