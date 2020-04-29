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

def replace_types!(records)
  records.each do |record|
    type_name = record.delete('type')

    record['type_id'] = type_name_to_id[type_name]
  end
end

def replace_abilities!(records)
  records.each do |record|
    ability_name = record.delete('ability')

    record['ability_id'] = ability_name_to_id[ability_name]
  end
end

def replace_pokemon!(records)
  records.each do |record|
    pokemon_name = record.delete('name')
    pokemon_subname = record.delete('subname')
    pokemon_full_name = pokemon_subname ? "#{pokemon_name} (#{pokemon_subname})" : pokemon_name

    record['pokemon_id'] = pokemon_name_to_id[pokemon_full_name]
  end
end

def seed(string)
  path = ::File.join(::File.dirname(__FILE__), "./seeds/#{string}.json")
  records = ::JSON.parse(::File.read(path))

  if string == 'moves'
    replace_types!(records)
  elsif string == 'pokemon_types'
    replace_pokemon!(records)
    replace_types!(records)
  elsif string == 'abilities_pokemon'
    replace_abilities!(records)
    replace_pokemon!(records)
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
end
